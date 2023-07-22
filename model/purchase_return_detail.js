const mongoose = require('mongoose');
const {Schema} = mongoose
const Purchase_return_detailSchema = new Schema({

    purchase_return_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"purchase_return"
    },
    purchase_return_billno:{
        type:Number
    },
    purchase_return_product:{
        type:String
    },
    purchase_return_batch:{
        type:Number
    },
    purchase_return_tax:{
        type:Number
    },
    purchase_return_expirydate:{
    type:Date
    },
    purchase_return_quantity:{
        type:Number
    },
    purchase_return_purchaseprice:{
        type:Number
    },
    purchase_return_salesprice:{
        type:Number
    },
    purchase_return_MRP:{
        type:Number
    },
    purchase_return_offer:{
        type:Number
    },
    purchase_return_discount:{
        type:Number
    },
    purchase_return_total:{
        type:Number
    },
    purchase_return_pack:{
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

module.exports=mongoose.model("purchase_return_detail", Purchase_return_detailSchema)
