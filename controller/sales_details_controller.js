

const SalesdetailSchema = require ('../model/sales_details');
const dotenv = require('dotenv');

dotenv.config();

const Insert_salesdetails = async (req,res)=>{

    try{
        const {sales_id,product_name,product_id,product_batch,sales_details_expirydate,sales_details_quantity,sales_details_price,sales_details_MRP,sales_details_tax,sales_details_total,sales_details_offer,sales_details_discount,sales_details_pack}=req.body
        const insert_sdetails = new SalesdetailSchema ({sales_id,product_name,product_id,product_batch,sales_details_expirydate,sales_details_quantity,sales_details_price,sales_details_MRP,sales_details_tax,sales_details_total,sales_details_offer,sales_details_discount,sales_details_pack})

        const sdetails = await insert_sdetails.save()
        res.json({sdetails})



    }catch(err){
        console.log("error"+err)
    }

}


const View_salesdetails = async (req,res)=>{

    try{

        if(req.params.id){
            const sdetails = await SalesdetailSchema.findById(req.params.id)
            return res.json(sdetails)

        }else{
            const sdetails = await SalesdetailSchema.find()
            return res.json(sdetails)
        }


    }catch(err){

        console.error(err.message);
        res.status(500).send("Internal some error occured");


    }

}


const Delete_salesdetails = async (req,res)=>{

    try{
let id = req.params.id;
let sdetails = await SalesdetailSchema.findById(id)

if(!sdetails){
    res.json({success:false, message:"purchase details not found!!"})
}
let delete_sdetails = await SalesdetailSchema.findByIdAndDelete(id)
return res.json({success:true, delete_sdetails})

    }catch(err){
        res.json({success:false, message:"Internal server error"})
        console.log(err)
    }

}

const Update_salesdetails = async (req,res)=>{

    try{
        let id = req.params.id;
        const {sales_id,product_name,product_id,product_batch,sales_details_expirydate,sales_details_quantity,sales_details_price,sales_details_MRP,sales_details_tax,sales_details_total,sales_details_offer,sales_details_discount,sales_details_pack}=req.body
        let upsdetails = await SalesdetailSchema.findById(id)

        if(!upsdetails){
            return res.json({success:false, message:"purchase details not found"})
        }
        let newSdetails ={}

        if (sales_id) {newSdetails.sales_id  = sales_id }
        if (product_id) {newSdetails.product_id  = product_id}
        if (product_name) {newSdetails.product_name  = product_name}
        if (product_batch) {newSdetails.product_batch  = product_batch}
        if (sales_details_expirydate) {newSdetails.sales_details_expirydate  = sales_details_expirydate }
        if (sales_details_quantity) {newSdetails.sales_details_quantity  = sales_details_quantity }
        if (sales_details_price) {newSdetails.sales_details_price  = sales_details_price}
        if (sales_details_MRP) {newSdetails.sales_details_MRP  = sales_details_MRP}
        if (sales_details_tax) {newSdetails.sales_details_tax  = sales_details_tax }
        if (sales_details_total) {newSdetails.sales_details_total  = sales_details_total}
        if (sales_details_offer) {newSdetails.sales_details_offer  = sales_details_offer}
        if (sales_details_discount) {newSdetails.sales_details_discount  = sales_details_discount}
        if (sales_details_pack) {newSdetails.sales_details_pack  = sales_details_pack}
      

        let updatedSdetails = await SalesdetailSchema.findByIdAndUpdate(id, { $set: newSdetails }, { new: true })
        res.json({ success: true, updatedSdetails })

       
    }catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }



}

module.exports = { Insert_salesdetails, View_salesdetails, Delete_salesdetails, Update_salesdetails }
