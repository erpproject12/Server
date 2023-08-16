const mongoose=require('mongoose');
const {Schema}=mongoose;

const Payment_Reciept_Schema=new Schema({
    reciept_no:{
        type:Number,
        
    },
    party_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'party'
    },
    invoice_no:[],
    pay_mode:{
        type:String,
    },
    credit_note_no:[],
    cheque_no:{
        type:String,
    },
    transaction_id:{
        type:String,
    },
    total_amount:{
        type:Number
    },
    paid_amount:{
        type:Number
    },
    paid_date:{
        type:String,
    },
    narration:{
        type:String
    },
    payment_details:[]


});

module.exports=mongoose.model("payment_reciept",Payment_Reciept_Schema);