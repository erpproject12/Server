const Sales_returnSchema = require("../model/sales_return");
const dotenv = require('dotenv');
const { param } = require("../routers/product");
const { findById, findByIdAndDelete } = require("../model/product");

const Insert_Sales_return = async (req,res)=>{
    try{
        const {
            BillNo,
            BillDate,
            Party,
            rows,
            SubTotal,
            Discount,
            Tax,
            Freight,
            gtotal,
        }=req.body;
        let sales_return_insert = new Sales_returnSchema({
            party_id:Party,
            sales_return_date:BillDate,
            sales_return_bill:BillNo,
            sales_return_total:SubTotal,
            sales_return_discount:Discount,
            sales_return_freight:Freight,
            sales_return_vat:Tax,
            sales_return_gtotal:gtotal,
            sales_return:rows

        })
        const sale =  await sales_return_insert.save()
        res.json(sale)
    }catch(error){
        console.log("error" +error);
    }
}

const View_Sales_Return = async(req,res) =>{
    try{
    if(req.params.id){
        const sale_return = await  Sales_returnSchema.findById(req.params.id).populate([{path : 'sales_return.ItemName'},{path : 'party_id'}]);
    return res.json(sale_return)
    }else{
    const sale_return = await  Sales_returnSchema.find().populate("party_id");
    return res.json(sale_return)
    }
}
    catch (error){
        console.error(error.message);
        res.status(500).send("Internal some error occured");
}
    }

const UpdateSalesReturn = async (req,res) =>{
    try{
        id=req.params.id;
        const { sales_return_bill, sales_return_date,Party,sales_return_total,sales_return_discount,sales_return_vat,sales_return_freight,sales_return_gtotal,sales_return}=req.body
let sales = await Sales_returnSchema.findById(req.params.id)
if(!sales){
    return res.json({success:false,massege:"Product Not Found"})
}
let newSales = {};
if(sales_return_bill) {newSales.sales_return_bill = sales_return_bill;}
if(sales_return_date) {newSales.sales_return_date = sales_return_date;}
if(Party) {newSales.party_id = Party;}
if(sales_return_total) {newSales.sales_return_total = sales_return_total;}
if(sales_return_discount) {newSales.sales_return_discount = sales_return_discount;}
if(sales_return_vat) {newSales.sales_return_vat = sales_return_vat;}
if(sales_return_freight) {newSales.sales_return_freight = sales_return_freight;}
if(sales_return_gtotal) {newSales.sales_return_gtotal = sales_return_gtotal;}
if(sales_return) {newSales.sales_return = sales_return;}
let updateSales = await Sales_returnSchema.findByIdAndUpdate(id, {$set : newSales}, {new:true})
{res.json({ success: true, updateSales})}
    }
    catch(error){
        res.json({success: false, message: "Internal server error!!!" })
        console.log(error)
    }
}
    
const SalesDelete = async(req,res)=>{
    try{
    let Sales = await Sales_returnSchema.findById(req.params.id);
    if(!Sales){
        res.json({ success: false, message: "Sales Not Found!!!" })
    }
    let DeleteSales = await Sales_returnSchema.findByIdAndDelete(req.params.id)
    return res.json({ success: true, DeleteSales })
}
catch (err) {
    res.json({ success: false, message: "Internal server error!!!" })
    console.log(err)
}
}

module.exports = {Insert_Sales_return,View_Sales_Return,UpdateSalesReturn,SalesDelete}