

const PurchasedetailSchema = require ('../model/purchase_details_model');
const dotenv = require('dotenv');

dotenv.config();

const Insert_purchasedetails = async (req,res)=>{

    try{
        const {purchase_id,product_id,product_name,product_batch,product_expirydate,purchase_quantity,purchase_offer,purchase_price,sales_price,product_MRP_price,product_discount,product_tax,purchase_product_totalprice,purchase_product_pack}=req.body
        const insert_pdetails = new PurchasedetailSchema ({purchase_id,product_id,product_name,product_batch,product_expirydate,purchase_quantity,purchase_offer,purchase_price,sales_price,product_MRP_price,product_discount,product_tax,purchase_product_totalprice,purchase_product_pack})

        const pdetails = await insert_pdetails.save()
        res.json({pdetails})



    }catch(err){
        console.log("error"+err)
    }

}


const View_purchasedetails = async (req,res)=>{

    try{

        if(req.params.id){
            const pdetails = await PurchasedetailSchema.findById(req.params.id)
            return res.json(pdetails)

        }else{
            const pdetails = await PurchasedetailSchema.find()
            return res.json(pdetails)
        }


    }catch(err){

        console.error(err.message);
        res.status(500).send("Internal some error occured");


    }

}


const Delete_purchasedetails = async (req,res)=>{

    try{
let id = req.params.id;
let pdetails = await PurchasedetailSchema.findById(id)

if(!pdetails){
    res.json({success:false, message:"purchase details not found!!"})
}
let delete_pdetails = await PurchasedetailSchema.findByIdAndDelete(id)
return res.json({success:true, delete_pdetails})

    }catch(err){
        res.json({success:false, message:"Internal server error"})
        console.log(err)
    }

}

const Update_purchasedetails = async (req,res)=>{

    try{
        let id = req.params.id;
        const {purchase_id,product_id,product_name,product_batch,product_expirydate,purchase_quantity,purchase_offer,purchase_price,sales_price,product_MRP_price,product_discount,product_tax,purchase_product_totalprice,purchase_product_pack}=req.body

        let updetails = await PurchasedetailSchema.findById(id)

        if(!updetails){
            return res.json({success:false, message:"purchase details not found"})
        }
        let newPdetails ={}

        if (purchase_id) {newPdetails.purchase_id  = purchase_id }
        if (product_id) {newPdetails.product_id  = product_id}
        if (product_name) {newPdetails.product_name  = product_name}
        if (product_batch) {newPdetails.product_batch  = product_batch}
        if (product_expirydate) {newPdetails.product_expirydate  = product_expirydate }
        if (purchase_quantity) {newPdetails.purchase_quantity  = purchase_quantity }
        if (purchase_offer) {newPdetails.purchase_offer  = purchase_offer}
        if (purchase_price) {newPdetails.purchase_price  = purchase_price}
        if (sales_price) {newPdetails.sales_price  = sales_price }
        if (product_MRP_price) {newPdetails.product_MRP_price  = product_MRP_price}
        if (product_discount) {newPdetails.product_discount  = product_discount}
        if (product_tax) {newPdetails.product_tax  = product_tax}
        if (purchase_product_totalprice) {newPdetails.purchase_product_totalprice  = purchase_product_totalprice}
        if (purchase_product_pack) {newPdetails.purchase_product_pack = purchase_product_pack}


        let updatedPdetails = await PurchasedetailSchema.findByIdAndUpdate(id, { $set: newPdetails }, { new: true })
        res.json({ success: true, updatedPdetails })

       
    }catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }



}

module.exports = { Insert_purchasedetails, View_purchasedetails, Delete_purchasedetails, Update_purchasedetails }
