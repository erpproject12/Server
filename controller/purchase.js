
const PurchaseSchema = require('../model/purchase');
const dotenv = require('dotenv')


const InsertPurchase = async(req,res)=>{
    console.log(req);
    try{
        const {
            BillNo,
            BillDate,
            Party,
            rows,
            SubTotal,
            Discount,
            Vat,
            Freight,
            gtotal,

        }=req.body;

        let purchase_insert = new PurchaseSchema({
            party_id:Party,
            purchase_bill_no:BillNo,
            purchase_bill_date:BillDate,
            purchase_total_price: SubTotal,
            purchase_discount:Discount,
            purchase_freight:Freight,
            purchase_gtotal:gtotal,
            purchase_vat:Vat,
            item:rows
        });
        const purch = await purchase_insert.save();
        res.json({purch})
    }catch(error){
        console.log("error" +error);
    }
}

const ViewPurchase = async(req,res)=>{
    try{
        if(req.params.id){
            const purchase = await PurchaseSchema.findById(req.params.id).populate([{path:'item.ItemName'},{path:'party_id'}]);
            return res.json(purchase);
        }else{
            const purchase = await PurchaseSchema.find().populate([{path:'item.ItemName'},{path:'party_id'}]);
            return res.json(purchase);
        }
    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal some error occured");
    }
}


const DeletePurchase = async(req,res)=>{
    try{
        let id  = req.params.id;
        let purchase = await PurchaseSchema.findById(id);
        if(!purchase){
          res.json({success:false, message:"Sales item not found"});
          return
        }
        let deletepurchase = await PurchaseSchema.findByIdAndDelete(id);
        return res.json({success:true,deletepurchase})
    }catch(err){
        res.json({success:false,message:"Internal server error"});
        console.log(err);
    }
}


module.exports = {InsertPurchase, ViewPurchase,DeletePurchase}

