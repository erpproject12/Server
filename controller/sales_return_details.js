

const Salesreturn_detail_Schema = require ('../model/sales_return_details');
const dotenv = require('dotenv');

dotenv.config();

const Insert_salereturn_details = async (req,res)=>{

    try{
        const {sales_return_id,sales_return_billno,sales_product,sales_product_batch,sales_return_expirydate, sales_return_tax,sales_return_quantity,sales_return_salessprice,sales_return_MRP,sales_return_offer, sales_return_discount,sales_return_total,sales_return_pack}=req.body

        const insert_sreturnd = new Salesreturn_detail_Schema ({sales_return_id,sales_return_billno,sales_product,sales_product_batch,sales_return_expirydate, sales_return_tax,sales_return_quantity,sales_return_salessprice,sales_return_MRP,sales_return_offer, sales_return_discount,sales_return_total,sales_return_pack})

        const sreturnd = await insert_sreturnd.save()
        res.json({sreturnd})



    }catch(err){
        console.log("error"+err)
    }

}


const View_salesreturn_details = async (req,res)=>{

    try{

        if(req.params.id){
            const srdetails = await Salesreturn_detail_Schema.findById(req.params.id)
            return res.json(srdetails)

        }else{
            const srdetails = await Salesreturn_detail_Schema.find()
            return res.json(srdetails)
        }


    }catch(err){

        console.error(err.message);
        res.status(500).send("Internal some error occured");


    }

}


const Delete_salesreturn_details = async (req,res)=>{

    try{
let id = req.params.id;
let sreturndetails = await Salesreturn_detail_Schema.findById(id)

if(!sreturndetails){
    res.json({success:false, message:"sales details not found!!"})
}
let delete_srdetails = await Salesreturn_detail_Schema.findByIdAndDelete(id)
return res.json({success:true, delete_srdetails})

    }catch(err){
        res.json({success:false, message:"Internal server error"})
        console.log(err)
    }

}

const Update_salesreturn_details = async (req,res)=>{

    try{
        let id = req.params.id;
        const {sales_return_id,sales_return_billno,sales_product,sales_product_batch,sales_return_expirydate, sales_return_tax,sales_return_quantity,sales_return_salessprice,sales_return_MRP,sales_return_offer, sales_return_discount,sales_return_total,sales_return_pack}=req.body

        let uprdetails = await Salesreturn_detail_Schema.findById(id)

        if(!uprdetails){
            return res.json({success:false, message:"sales details not found"})
        }
        let newSreturnrd ={}

        if (sales_return_id) {newSreturnrd.sales_return_id  = sales_return_id }
        if (sales_return_billno) {newSreturnrd.sales_return_billno  = sales_return_billno}
        if (sales_product) {newSreturnrd.sales_product  = sales_product}
        if (sales_product_batch) {newSreturnrd.sales_product_batch  = sales_product_batch}
        if (sales_return_expirydate) {newSreturnrd.sales_return_expirydate  = sales_return_expirydate }
        if (sales_return_tax) {newSreturnrd.sales_return_tax  = sales_return_tax }
        if (sales_return_quantity) {newSreturnrd.sales_return_quantity  = sales_return_quantity}
        if (sales_return_salessprice) {newSreturnrd.sales_return_salessprice  = sales_return_salessprice}
        if (sales_return_MRP) {newSreturnrd.sales_return_MRP = sales_return_MRP}
        if (sales_return_offer) {newSreturnrd.sales_return_offer  = sales_return_offer}
        if (sales_return_discount) {newSreturnrd.sales_return_discount  = sales_return_discount}
        if (sales_return_total) {newSreturnrd.sales_return_total  = sales_return_total}
        if (sales_return_pack) {newSreturnrd.sales_return_pack  = sales_return_pack}
       

        let updatedSreturndetails = await Salesreturn_detail_Schema.findByIdAndUpdate(id, { $set: newSreturnrd }, { new: true })
        res.json({ success: true, updatedSreturndetails })

       
    }catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }



}

module.exports = {Insert_salereturn_details, View_salesreturn_details, Delete_salesreturn_details, Update_salesreturn_details}
