const mongoose = require('mongoose')

const {Schema} = mongoose

const PurchaseDetailsSchema = new Schema ({

    purchase_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"purchase"
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    product_name:{
     type:String,
     require:true
    },
    product_batch:{
        type:String,

    },
    product_expirydate:{

        type:Date,
    },
    purchase_quantity:{
        type:Number,
        require:true
    },
    purchase_offer:{

        type:String

    },
    purchase_price:{

        type:Number,
        require:true
    },
    sales_price:{
        type:Number

    },
    product_MRP_price:{

        type:Number
    },
    product_discount:{
        type:Number

    },
    product_tax:{
        type:Number
    },
    purchase_product_totalprice:{
        type:Number
    },
    purchase_product_pack:{
        type:Number
    },
    purchasedetail_date:{
        type:Date,
        default:Date.now
    },
    purchasedetail_status:{
        type:String
    }



})

module.exports = mongoose.model("purchasedetails", PurchaseDetailsSchema )