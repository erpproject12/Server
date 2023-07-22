const mongoose = require('mongoose')
const {Schema} = mongoose

const SalesSchema = new Schema({
    sales_billno:{
        type:String,
        require:true
    },
    party_no:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    party_code:{
        type:Number

    },
    sales_billdate:{
        type:Date

    },
    sales_total:{
        type:Number
    },
    sales_discount:{
        type:Number
    },
    sales_freight:{
        type:Number
    },
    sales_gtotal:{
        type:Number
    },
    sales_credit_no:{
        type:Number
    },
    sales_credit_amt:{
    type:Number
    }
})

module.exports=mongoose.model("sales",SalesSchema)
