const mongoose = require('mongoose');
const product = require('./product');
const party = require('./party');
const { Schema } = mongoose;

const SalesSchema = new Schema({
    sales_billno: {
        type: String,
        required: true
    },

    party_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'party'

        
    },
    invoice_no:{
        type:String

    },
   
    sales_billdate: {
        type: Date
    },
    sales_total: {
        type: Number
    },
    sales_discount: {
        type: Number
    },
    sales_freight: {
        type: Number
    },
    sales_gtotal: {
        type: Number
    },
    sales_credit_no: {
        type: Number
    },
    sales_credit_amt: {
        type: Number
    },
    sales_vat: {
        type: Number
    },
    sales_date: {
        type: Date,
        default: Date.now
    },
    sales_status: {
        type: String
    },
    item: [{
        id: {
            type: Number
        },

        ItemName:{
            type:mongoose.Schema.Types.ObjectId,
            ref:product

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
});

module.exports = mongoose.model("sales", SalesSchema);