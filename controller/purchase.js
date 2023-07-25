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
module.exports = {InsertPurchase}