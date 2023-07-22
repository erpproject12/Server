const mongoose = require('mongoose')
const {Schema} = mongoose

const sales_detailsSchema = new Schema ({
    sales_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"sales"
    },
    product_name:{
        type:String
        
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    product_batch:{
        type:Number
    },
    sales_details_expirydate:{
        type:Date
    },
    sales_details_quantity:{
        type:Number
    },
    sales_details_price:{
        type:Number
    },
    sales_details_MRP:{
        type:Number
    },
    sales_details_tax:{
        type:Number
    },
    sales_details_total:{
        type:Number
    },
    sales_details_offer:{
        type:String
    },
    sales_details_discount:{
        type:Number
    },
    sales_details_pack:{
        type:Number
    },
    sales_details_date:{
        type:Date,
        require:Date.now
    },
    sales_details_status:{
        type:String
    }


})

module.exports = mongoose.model("sales_details",sales_detailsSchema)