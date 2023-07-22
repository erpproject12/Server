const Purchasereturn_Schema = require('../model/purchase_return');
const dotenv = require('dotenv');

dotenv.config()

const InsertPurchase_return = async (req,res)=>{ 
    try{
    const {purchase_return_creditnote, party_code,party_id,purchase_return_date, purchase_return_totalprice, purchase_return_discount, purchase_return_freight,purchase_return_gtotal}=req.body
    const insertpreturn = new Purchasereturn_Schema ({purchase_return_creditnote, party_code,party_id,purchase_return_date, purchase_return_totalprice, purchase_return_discount, purchase_return_freight,purchase_return_gtotall})

    const purchase = await insertpreturn.save();
    res.json({purchase})

}catch(err){
console.log("error"+err)
}

}

const ViewPurchase_return = async (req, res) => {

     
    try{

        if(req.params.id){
            const purchasereturn=await Purchasereturn_Schema.findById(req.params.id);  //singlr ptoduct view insted of using another single api we can use if condition
       return res.json(purchasereturn)
        }else{ 
        const pr=await Purchasereturn_Schema.find();  //schema = Product
       return res.json(pr)  
    } 
}

    catch (error){
        console.error(error.message);
        res.status(500).send("Internal some error occured");
}
}

const DeletePurchase_return = async (req, res) => {
    try {
        let id = req.params.id;
        let purchase_return = await Purchasereturn_Schema.findById(id); //schema
        if (!purchase_return) {
            res.json({ success: false, message: "Purchase return Not Found!!!" })
        }
        let delete_purchaser = await Purchasereturn_Schema.findByIdAndDelete(id) //schema
        return res.json({ success: true, delete_purchaser })
    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
        
    }
}

const UpdatePurchase_return = async (req, res) => {
    try {
        let id = req.params.id;
        const {purchase_return_creditnote, party_code,party_id,purchase_return_date, purchase_return_totalprice, purchase_return_discount, purchase_return_freight,purchase_return_gtotal}=req.body
        let purchasereturn = await Purchasereturn_Schema.findById(id) //schema
        if (!purchasereturn) {
            return res.json({ success: false, message: "Purchase return Not Found!!!" })
        }
        let newPurchasereturn = {}
        if (purchase_return_creditnote) { newPurchasereturn.purchase_return_creditnote = purchase_return_creditnote } //input tag name , object.schema name, input tag name
        if (party_id) { newPurchasereturn.party_id = party_id}
        if (party_code) { newPurchasereturn.party_code = party_code }
        if (purchase_return_date) { newPurchasereturn.purchase_return_date = purchase_return_date }
        if (purchase_return_totalprice) { newPurchasereturn.purchase_return_totalprice = purchase_return_totalprice }
        if (purchase_return_discount) { newPurchasereturn.purchase_return_discount = purchase_return_discount }
        if ( purchase_return_freight) {newPurchasereturn. purchase_return_freight =  purchase_return_freight }
        if (purchase_return_gtotal) { newPurchasereturn.purchase_return_gtotal = purchase_return_gtotal }
        

        let updatedPurchase_return = await Purchasereturn_Schema.findByIdAndUpdate(id, { $set: newPurchasereturn }, { new: true })
        res.json({ success: true, updatedPurchase_return})

    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }
}


module.exports ={InsertPurchase_return,ViewPurchase_return ,DeletePurchase_return, UpdatePurchase_return }