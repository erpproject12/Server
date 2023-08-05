const mongoose = require('mongoose')
const {Schema} = mongoose
const StockSchema = new Schema ({
opening_stocks:[
    {
        ItemName:{
        type:String,
        require:false


    },
    Batch:{
        type:Number
        
    },
    ExpDate:{

        type:Date,
        
    },
    product_unit_price:{
        type:Number
        
    },
    stock_MRP:{
        type:Number
        
    },
    Qty:{
        type:Number        
    },
    stock_total_price:{
        type:Number,
        require:true
    },
    stock_sell_price:{
        type:Number,
        
    },
    stock_date:{
        type:Date,
        default:Date.now
    },
    stock_satus:{
        type:String
    }
    }
]
    

}
) 

module.exports=mongoose.model("stock",StockSchema)