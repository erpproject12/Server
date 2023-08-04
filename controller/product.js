const express = require('express');
const Product = require('../model/product');
const dotenv = require('dotenv');

dotenv.config()


// router.post('/insert', async(req,res)=>{

    const InsertProduct = async (req, res) => {

    try{
    //   console.log("hello");
        
    const { product_name, product_code, tax_code, product_description,rack_no, HSN, product_barcode,category,manufactures,unit_of_masure,weight_dimension,variants,reorder_point,active_status } = req.body
    let product_insert = new Product({ product_name, product_code, tax_code, product_description,rack_no, HSN, product_barcode,category,manufactures,unit_of_masure,weight_dimension,variants,reorder_point,active_status })
    const products = Product.find({product_name})
    if(products){
        console.log("ture")
    
    }
    
    

console.log(products);
       
    
            const pro = await product_insert.save();
            res.json({pro})
    
     }catch(err){
    console.log("error"+err)
        }
      }


      const ViewProduct = async (req, res) => {

     
        try{
            if(req.params.id){
                const exm=await Product.findById(req.params.id);  //singlr ptoduct view insted of using another single api we can use if condition
           return res.json(exm)
            }else{ 
            const exm=await Product.find();  //schema = Product
           return res.json(exm)  
        } 
    }
        catch (error){
            console.error(error.message);
            res.status(500).send("Internal some error occured");
    }
    }


    const DeleteProduct = async (req, res) => {
        try {
            let id = req.params.id;
            let product = await Product.findById(id); //schema
            if (!product) {
                res.json({ success: false, message: "Product Not Found!!!" })
            }
            let delete_product = await Product.findByIdAndDelete(id) //schema
            return res.json({ success: true, delete_product })
        }
        catch (err) {
            res.json({ success: false, message: "Internal server error!!!" })
            console.log(err)
        }
    }


const UpdateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        const { product_name, product_code, tax_code, product_description,rack_no, HSN, product_barcode,category,manufactures,unit_of_masure,weight_dimension,variants,reorder_point,active_status } = req.body
        let product = await Product.findById(id) //schema
        if (!product) {
            return res.json({ success: false, message: "Product Not Found!!!" })
        }
        let newProduct = {}
        if (product_name) { newProduct.product_name = product_name } //input tag name , object.schema name, input tag name
        if (product_code) { newProduct.product_code = product_code }
        if (tax_code) { newProduct.tax_code = tax_code }
        if (product_description) { newProduct.product_description = product_description }
        if (rack_no) { newProduct.rack_no = rack_no }
        if (HSN) { newProduct.HSN = HSN }
        if (product_barcode) { newProduct.product_barcode = product_barcode }
        if (category) { newProduct.category = category }
        if (unit_of_masure) { newProduct.unit_of_masure = unit_of_masure }
        if (manufactures) { newProduct.manufactures = manufactures }
        if (weight_dimension) { newProduct.weight_dimension = weight_dimension }
        if (variants) { newProduct.variants = variants}
         if (reorder_point) { newProduct.reorder_point = reorder_point }
        if (active_status) { newProduct.active_status = active_status }
        let updatedGrocery = await Product.findByIdAndUpdate(id, { $set: newProduct }, { new: true })
        res.json({ success: true, updatedGrocery })
    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }
}

      module.exports = {  InsertProduct, ViewProduct, DeleteProduct, UpdateProduct }