const mongoose = require('mongoose');
const {Schema} = mongoose

const Purchase_returnSchema = new Schema({
    purchase_return_creditnote:{
        type: String

    },
    party_code:{
        type:Number
    },
    party_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"party"
    },
    purchase_return_date:{
        type:Date,
        require:true
    },
    purchase_return_totalprice:{
        type:Number,
        require:true
    },
    purchase_return_discount:{
        type:Number
        
    },
    purchase_return_freight:{
        type:Number
    },
    purchase_return_gtotal:{
        type:Number
    },
    purchase_return_date:{
        type:Date,
        require:Date.now
    },
    purchase_return_status:{
        type:String
    }


})

module.exports=mongoose.model("purchase_return", Purchase_returnSchema)