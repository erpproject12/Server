const Sales_returnSchema = require("../model/sales_return");
const dotenv = require('dotenv');
const { param } = require("../routers/product");
const { findById, findByIdAndDelete } = require("../model/product");


const credit=async()=>{
const creditDate=new Date;
const formattedDate=`${creditDate.getDate().toString().padStart(2,"0")}${(creditDate.getMonth()+1).toString().padStart(2,"0")}${creditDate.getYear().toString().slice(-2)}`;
const latestCreditNote=await Sales_returnSchema.findOne().sort({credit_note_no:-1}).select('credit_note_no').exec();
const lastCreditCount=latestCreditNote?latestCreditNote.credit_note_no:`CRD-${formattedDate}-0`;
const lastCreditNumber=parseInt(lastCreditCount.split('-')[2]);
const newCreditCount=lastCreditNumber+1;
return `CRD-${formattedDate}-${newCreditCount}`
}

const Insert_Sales_return = async (req,res)=>{
    try{
        const {
            billNo,
            billDate,
            partyId,
            items,
            subTotal,
            discountAmount,
            vatAmount,
            grandTotalAmount,
            invoiceNo
        }=req.body;
        const sales_returnCreditno=await credit();
        let sales_return_insert = new Sales_returnSchema({
           
            credit_note_no:sales_returnCreditno,
            invoice_no:invoiceNo,
            party_id:partyId,
            sales_return_date:billDate,
            sales_return_bill:billNo,
            sales_return_total:subTotal,
            sales_return_discount:discountAmount,
            sales_return_vat:vatAmount,
            sales_return_gtotal:grandTotalAmount,
            sales_return:items

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
    const sale_return = await  Sales_returnSchema.find().populate([{path : 'sales_return.ItemName'},{path : 'party_id'}]);
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