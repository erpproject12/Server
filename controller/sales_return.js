const Salesreturn_Schema = require('../model/sales_return');
const dotenv = require('dotenv');

dotenv.config()

const InsertSales_return = async (req,res)=>{ 
    try{
    const {sales_return_creditno, party_code,party_id,sales_return_date, sales_return_total, sales_return_discount, sales_return_freight,sales_return_gtotal}=req.body
    const insertsreturn = new Salesreturn_Schema ({sales_return_creditno, party_code,party_id,sales_return_date, sales_return_total, sales_return_discount, sales_return_freight,sales_return_gtotal})

    const sales = await insertsreturn.save();
    res.json({sales})

}catch(err){
console.log("error"+err)
}

}

const ViewSales_return = async (req, res) => {

     
    try{

        if(req.params.id){
            const salesreturn=await Salesreturn_Schema.findById(req.params.id);  //singlr ptoduct view insted of using another single api we can use if condition
       return res.json(salesreturn)
        }else{ 
        const sr=await Salesreturn_Schema.find();  //schema = Product
       return res.json(sr)  
    } 
}

    catch (error){
        console.error(error.message);
        res.status(500).send("Internal some error occured");
}
}

const DeleteSales_return = async (req, res) => {
    try {
        let id = req.params.id;
        let sales_return = await Salesreturn_Schema.findById(id); //schema
        if (!sales_return) {
            res.json({ success: false, message: "Sales return Not Found!!!" })
        }
        let delete_salesr = await Salesreturn_Schema.findByIdAndDelete(id) //schema
        return res.json({ success: true, delete_salesr })
    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
        
    }
}

const UpdateSales_return = async (req, res) => {
    try {
        let id = req.params.id;
        const {sales_return_creditno, party_code,party_id,sales_return_date, sales_return_total, sales_return_discount, sales_return_freight,sales_return_gtotal}=req.body
        let salesreturn = await Salesreturn_Schema.findById(id) //schema
        if (!salesreturn) {
            return res.json({ success: false, message: "Purchase return Not Found!!!" })
        }
        let newSalesreturn = {}
        if (sales_return_creditno) { newSalesreturn.sales_return_creditno = sales_return_creditno } //input tag name , object.schema name, input tag name
        if (party_id) { newSalesreturn.party_id = party_id}
        if (party_code) { newSalesreturn.party_code = party_code }
        if (sales_return_date) { newSalesreturn.sales_return_date = sales_return_date }
        if (sales_return_total) { newSalesreturn.sales_return_total = sales_return_total }
        if (sales_return_discount) { newSalesreturn.sales_return_discount = sales_return_discount }
        if ( sales_return_freight) {newSalesreturn. sales_return_freight =  sales_return_freight }
        if (sales_return_gtotal) { newSalesreturn.sales_return_gtotal = sales_return_gtotal }
        

        let updatedSales_return = await Salesreturn_Schema.findByIdAndUpdate(id, { $set: newSalesreturn }, { new: true })
        res.json({ success: true, updatedSales_return})

    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }
}


module.exports ={InsertSales_return,ViewSales_return ,DeleteSales_return, UpdateSales_return }