const mongoose = require('mongoose')
const {Schema} = mongoose
const StockSchema = new Schema ({

    stock_product:{
        type:String,
        require:true


    },
    stock_product_batch:{
        type:String,
        require:true
    },
    product_exp_date:{

        type:Date,
        
    },
    product_unit_price:{
        type:Number,
        require:true
    },
    stock_MRP:{
        type:String,
        
    },
    stock_product_qty:{
        type:Number,
        require:true
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
    }

}
) 

module.exports=mongoose.model("stock",StockSchema)