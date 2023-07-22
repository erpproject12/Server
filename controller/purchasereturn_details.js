

const Purchasereturn_detail_Schema = require ('../model/purchase_return_detail');
const dotenv = require('dotenv');

dotenv.config();

const Insert_purchasereturn_details = async (req,res)=>{

    try{
        const {purchase_return_id,purchase_return_billno,purchase_return_product,purchase_return_batch,purchase_return_tax, purchase_return_expirydate,purchase_return_quantity,purchase_return_purchaseprice,purchase_return_salesprice,purchase_return_MRP, purchase_return_offer,purchase_return_discount,purchase_return_total,purchase_return_pack}=req.body

        const insert_preturnd = new Purchasereturn_detail_Schema ({purchase_return_id,purchase_return_billno,purchase_return_product,purchase_return_batch,purchase_return_tax, purchase_return_expirydate,purchase_return_quantity,purchase_return_purchaseprice,purchase_return_salesprice,purchase_return_MRP, purchase_return_offer,purchase_return_discount,purchase_return_total,purchase_return_pack})

        const preturnd = await insert_preturnd.save()
        res.json({preturnd})



    }catch(err){
        console.log("error"+err)
    }

}


const View_purchasereturn_details = async (req,res)=>{

    try{

        if(req.params.id){
            const prdetails = await Purchasereturn_detail_Schema.findById(req.params.id)
            return res.json(prdetails)

        }else{
            const prdetails = await Purchasereturn_detail_Schema.find()
            return res.json(prdetails)
        }


    }catch(err){

        console.error(err.message);
        res.status(500).send("Internal some error occured");


    }

}


const Delete_purchasereturn_details = async (req,res)=>{

    try{
let id = req.params.id;
let preturndetails = await Purchasereturn_detail_Schema.findById(id)

if(!preturndetails){
    res.json({success:false, message:"purchase details not found!!"})
}
let delete_prdetails = await Purchasereturn_detail_Schema.findByIdAndDelete(id)
return res.json({success:true, delete_prdetails})

    }catch(err){
        res.json({success:false, message:"Internal server error"})
        console.log(err)
    }

}

const Update_purchasereturn_details = async (req,res)=>{

    try{
        let id = req.params.id;
        const {purchase_return_id,purchase_return_billno,purchase_return_product,purchase_return_batch,purchase_return_tax, purchase_return_expirydate,purchase_return_quantity,purchase_return_purchaseprice,purchase_return_salesprice,purchase_return_MRP, purchase_return_offer,purchase_return_discount,purchase_return_total,purchase_return_pack}=req.body

        let uprdetails = await Purchasereturn_detail_Schema.findById(id)

        if(!uprdetails){
            return res.json({success:false, message:"purchase details not found"})
        }
        let newPreturnrd ={}

        if (purchase_return_id) {newPreturnrd.purchase_id  = purchase_return_id }
        if (purchase_return_billno) {newPreturnrd.purchase_return_billno  = purchase_return_billno}
        if (purchase_return_product) {newPreturnrd.purchase_return_product  = purchase_return_product}
        if (purchase_return_batch) {newPreturnrd.purchase_return_batch  = purchase_return_batch}
        if (purchase_return_tax) {newPreturnrd.purchase_return_tax  = purchase_return_tax }
        if (purchase_return_expirydate) {newPreturnrd.purchase_return_expirydate  = purchase_return_expirydate }
        if (purchase_return_quantity) {newPreturnrd.purchase_return_quantity  = purchase_return_quantity}
        if (purchase_return_purchaseprice) {newPreturnrd.purchase_return_purchaseprice  = purchase_return_purchaseprice}
        if (purchase_return_salesprice) {newPreturnrd.purchase_return_salesprice = purchase_return_salesprice}
        if (purchase_return_MRP) {newPreturnrd.purchase_return_MRP  = purchase_return_MRP}
        if (purchase_return_offer) {newPreturnrd.purchase_return_offer  = purchase_return_offer}
        if (purchase_return_discount) {newPreturnrd.purchase_return_discount  = purchase_return_discount}
        if (purchase_return_total) {newPreturnrd.purchase_return_total  = purchase_return_total}
        if (purchase_return_pack) {newPreturnrd.purchase_return_pack = purchase_return_pack}


        let updatedPreturndetails = await Purchasereturn_detail_Schema.findByIdAndUpdate(id, { $set: newPreturnrd }, { new: true })
        res.json({ success: true, updatedPreturndetails })

       
    }catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }



}

module.exports = { Insert_purchasereturn_details, View_purchasereturn_details, Delete_purchasereturn_details, Update_purchasereturn_details}
