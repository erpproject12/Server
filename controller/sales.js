const SalesSchema = require('../model/sales');
const dotenv =require('dotenv')

const InsertSales = async(req,res)=>{
    console.log(req);
    try{
        const { 
            BillNo,
            Invoice,
            Party,
            BillDate,
            SubTotal,
            Discount,
            Vat,
            Freight,
            gtotal,
            rows
         }=req.body;

         let sales_insert = new SalesSchema({
            sales_billno:BillNo,
            invoice_no:Invoice,
            party_id:Party,
            sales_billdate:BillDate,
            sales_discount:Discount,
            sales_total:SubTotal,
            sales_vat:Vat,
            sales_freight:Freight,
            sales_gtotal:gtotal,
            item:rows

         });
         const sales = await sales_insert.save();
         res.json({sales})

    }catch(err){
console.log("error",+err)
    }
}

const ViewSales =async(req,res)=>{
    try{
        if(req.params.id){
const sales = await SalesSchema.findById(req.params.id).populate([{path:'item.ItemName'},{path:'party_id'}]);
return res.json(sales);
        }else{
const sales = await SalesSchema.find().populate([{path:'item.ItemName'},{path:'party_id'}]);
return res.json(sales);
        }
    }catch(err){
        console.log(error.message);
        res.status(500).send("Internal some error occured");

    }
};


const DeleteSales = async(req,res)=>{
    try{
       let id = req.params.id;
       let sales =await SalesSchema.findById(id);
       if(!sales){
        res.json({success:false,message:"Sales item not found"});
         return 
       }
       let deletesales = await SalesSchema.findByIdAndDelete(id);
       return res.json({success:true, deletesales})

       
    }catch(err){
      res.json({success:false, message:"Internal server error"});
      console.log(err);
    }
};


const UpdateSales = async(req,res)=>{

    try{

        let id = req.params.id;
        const {
            sales_billno,
            party_id,
            sales_billdate,
            sales_total,
            sales_discount,
            sales_vat,
            sales_freight,
            sales_gtotal,
            item
        }=req.body;

        let sales = await SalesSchema.findById(req.params.id);
        if(!sales){
            return res.json({success:false, message:"sales item not found"});
        }
        let newSales  ={};

        if(sales_billno){
            newSales.sales_billno=sales_billno;
        }
        if(party_id){
            newSales.party_id=party_id;
        }
        if(sales_billdate){
            newSales.sales_billdate=sales_billdate;
        }
        if(sales_total){
            newSales.sales_total=sales_total;
        }
        if(sales_discount){
           newSales.sales_discount=sales_discount;
        }
        if(sales_vat){
            newSales.sales_vat=sales_vat;
        }
        if(sales_freight){
            newSales.sales_freight=sales_freight;
        }
        if(sales_gtotal){
            newSales.sales_gtotal=sales_gtotal;
        }
        if(item){
           newSales.item=item;
        }

        let updatedSales = await SalesSchema.findByIdAndUpdate(
            id,
            { $set: newSales },
            { new: true }
          );
          {res.json({ success: true, updatedSales })};

    }catch(err){
        res.json({ success: false, message: "Internal server error!!!" });
        console.log(err);
    }

}



module.exports = {InsertSales,ViewSales,DeleteSales,UpdateSales}