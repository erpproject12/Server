const mongoose = require ('mongoose')
const {Schema} = mongoose


const PurchaseSchema = new Schema({
    purchase_bill_no:{
        type:String
        
    },
    party_id:{

            type: mongoose.Schema.Types.ObjectId,
            ref: 'party',
            type:String
    },
   

    party_code:{
        type:Number
    },
    purchase_bill_date:{
        type:Date,
        require:true

    },

    purchase_vat:{
        type:Number,
        require:true

    },

    purchase_total_price:{
        type: Number,
        require:true
    },
    purchase_discount:{
        type:Number
    },
    purchase_freight:{
        type:Number
    },
    purchase_gtotal:{
        type: Number,
        require:true
    },
    purchase_udate:{
        type:Date,
        default:Date.now
    },
    purchase_status:{
        type:String
    },

    item :[{
        id: {
            type: Number
        },

        ItemName:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'product'

        },
        Batch: {
            type: String
        },
        Qty: {
            type: Number
        },
        Discount: {
            type: Number
        },
        PPrice: {
            type: Number
        },
        SPrice:{
         type:Number
        },
        ExpDate: {
            type: Date // Assuming this should be of type Date
        },
        MRP: {
            type: Number
        },
        Tax: {
            type: Number
        },
        Total: {
            type: Number
        }
    }]


})

module.exports = mongoose.model("purchase",PurchaseSchema)