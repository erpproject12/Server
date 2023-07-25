const mongoose = require ('mongoose')
const {Schema} = mongoose


const PurchaseSchema = new Schema({
    purchase_bill_no:{
        type:String
        
    },
    party_id:{
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'party',
            type:String
    },
    party_code:{
        type:Number
    },
    purchase_bill_date:{
        type:Date,
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

    item :[]

//     {
//         product_id:{
//             // type:mongoose.Schema.Types.ObjectId,
//             // ref:"product"
//             type:String
//         },
//         product_name:{
//             type:String,
//             require:true
//            },
//            product_batch:{
//             type:String,
    
//         },
//         product_expirydate:{
    
//             type:Date,
//         },
//         purchase_quantity:{
//             type:Number,
//             require:true
//         },
//         purchase_price:{
    
//             type:Number,
//             require:true
//         },
//         sales_price:{
//             type:Number
    
//         },
//         product_MRP_price:{
    
//             type:Number
//         },
//         product_discount:{
//             type:Number
    
//         },
//         product_tax:{
//             type:Number
//         },
//         purchase_product_totalprice:{
//             type:Number
//         }

// }

})

module.exports = mongoose.model("purchase",PurchaseSchema)