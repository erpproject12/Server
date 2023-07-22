const mongoose = require ('mongoose');
const {Schema} =mongoose

const Salesreturn_detailsSchema = new Schema ({
    sales_return_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"party"
    },
    sales_return_billno:{
        type:Number

    },
    sales_product:{
        type:String
    },
    sales_product_batch:{
        type:Number
    },
    sales_return_expirydate:{
    type:Date
    },
    sales_return_tax:{
        type:Number
    },
    sales_return_quantity:{
        type:Number

    },
    sales_return_salessprice:{
        type:Number
    },
    sales_return_MRP:{
        type:Number
    },
    sales_return_offer:{
        type:String
    },
    sales_return_discount:{
        type:Number
    },
    sales_return_total:{
        type:Number
    },
    sales_return_pack:{
        type:Number
    },
    sales_return_date:{
        type:Date,
        default:Date.now
    },
    sales_return_date:{
        type:String
    }

    
    
})

module.exports = mongoose.model("salesreturn_details",Salesreturn_detailsSchema )