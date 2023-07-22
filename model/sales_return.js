const mongoose = require('mongoose')
const {Schema} = mongoose

const Sales_returnSchema = new Schema ({
    sales_return_creditno:{
        type:Number
    },
    party_code:{
        type:String
    },
    party_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"party"
    },
   sales_return_date:{
    type:Date,
    require:true
   },
   sales_return_total:{
    type:Number,
    require:true
   },
   sales_return_discount:{
    type:Number
   },
   sales_return_freight:{
    type:Number
   },
   sales_return_gtotal:{
    type:Number
   },
   sales_return_Date:{
    type:Date,
    require:Date.now
   },
   sales_return_status:{
    type:String
   }

})

module.exports =mongoose.model("sales_return",Sales_returnSchema )