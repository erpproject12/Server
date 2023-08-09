const mongoose = require('mongoose')
const product = require('./product')
const party = require('./party')
const {Schema} = mongoose

const Sales_returnSchema = new Schema ({
    sales_return_bill:{
        type:Number
    },
    credit_note_no:{
        type:String
    },
    invoice_no:{
        type:String
    },
    
    party_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:party,
    },
   sales_return_date:{
    type:String,
    require:true
   },
   sales_return_vat:{
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
   sales_return_vat:{
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
   },
   sales_return:[{
    id:{
        type:Number,
    },
    ItemName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:product,
    },
    Batch:{
        type:String,
    },
    Qty:{
        type:Number,
    },
    Discount:{
        type:Number,
    },
    ExpDate:{
        type:String,
    },
    PPrice:{
        type:Number,
    },
    SPrice:{
        type:Number,
    },
    MRP:{
        type:Number,
    },
    Tax:{
        type:Number,
    },
    Total:{
        type:Number,
    },
}]
})

module.exports =mongoose.model("sales_return",Sales_returnSchema )