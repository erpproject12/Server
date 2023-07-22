const PurchaseSchema = require('../model/purchase_model');
const dotenv = require('dotenv');

dotenv.config()

const InsertPurchase = async (req,res)=>{ 
    try{
    const {purchase_bill_no, party_id,party_code,purchase_bill_date, purchase_total_price, purchase_discount, purchase_freight,purchase_gtotal}=req.body
    const insertpurchase = new PurchaseSchema ({purchase_bill_no, party_id,party_code,purchase_bill_date, purchase_total_price, purchase_discount, purchase_freight,purchase_gtotal})

    const purchase = await insertpurchase.save();
    res.json({purchase})

}catch(err){
console.log("error"+err)
}

}

const ViewPurchase = async (req, res) => {

     
    try{

        if(req.params.id){
            const purchase=await PurchaseSchema.findById(req.params.id);  //singlr ptoduct view insted of using another single api we can use if condition
       return res.json(purchase)
        }else{ 
        const per=await PurchaseSchema.find();  //schema = Product
       return res.json(per)  
    } 
}

    catch (error){
        console.error(error.message);
        res.status(500).send("Internal some error occured");
}
}

const DeletePurchase = async (req, res) => {
    try {
        let id = req.params.id;
        let purchase = await PurchaseSchema.findById(id); //schema
        if (!purchase) {
            res.json({ success: false, message: "Purchase Not Found!!!" })
        }
        let delete_purchase = await PurchaseSchema.findByIdAndDelete(id) //schema
        return res.json({ success: true, delete_purchase })
    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
        
    }
}

const UpdatePurchase = async (req, res) => {
    try {
        let id = req.params.id;
        const {purchase_bill_no, party_id,party_code,purchase_bill_date, purchase_total_price, purchase_discount, purchase_freight,purchase_gtotal}=req.body
        let purchase = await PurchaseSchema.findById(id) //schema
        if (!purchase) {
            return res.json({ success: false, message: "Purchase Not Found!!!" })
        }
        let newPurchase = {}
        if (purchase_bill_no) { newPurchase.purchase_bill_no = purchase_bill_no } //input tag name , object.schema name, input tag name
        if (party_id) { newPurchase.party_id = party_id}
        if (party_code) { newPurchase.party_code = party_code }
        if (purchase_bill_date) { newPurchase.purchase_bill_date = purchase_bill_date }
        if (purchase_total_price) { newPurchase.purchase_total_price = purchase_total_price }
        if (purchase_discount) { newPurchase.purchase_discount = purchase_discount }
        if (purchase_freight) {newPurchase.purchase_freight = purchase_freight }
        if (purchase_gtotal) { newPurchase.purchase_gtotal = purchase_gtotal }
        

        let updatedPurchase = await PurchaseSchema.findByIdAndUpdate(id, { $set: newPurchase }, { new: true })
        res.json({ success: true, updatedPurchase})

    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }
}


module.exports ={InsertPurchase,ViewPurchase, DeletePurchase, UpdatePurchase }