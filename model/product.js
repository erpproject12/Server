const express = require('express')
const mongoose = require('mongoose')
const {Schema} = mongoose


const ProductSchema = new Schema ({
    product_name:{
        type:String,
        // required:true
    },
    product_code:{
        type:String,
        // required:true
    },
    tax_code:{
        type:Number,
        // required:true
    },
    product_description:{
        type:String,
        // required:true,
    },
    rack_no:{
        type:Number,
        
    },
    HSN:{
        type:String,
        
    },
    product_barcode:{
        type:String,
        
    },
    category:{
        type:String,
        
    },
    manufactures:{
        type:String,
        
    },
    unit_of_masure:{
        type:String,
        
    },
    active_status:{
        type:String,
        
    },
    weight_dimension:{
        type:String,
        
    },
    variants:{
        type:String,
        
    },
    reorder_point:{
        type:String,
        
    },
    date:{
        type:String,
       
    },
    updated_date:{
        type:String,
       
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
        
    },
    batch:{
        type:String,
        
    },
    exp_date:{
        type:Date,
        
    },
    qty:{
        type:Number,
        
    },
    price:{
        type:Number,
        
    },
    sell_price:{
        type:Number,
        
    },
    MRP:{
        type:Number,
        
    },
    total:{
        type:Number,
        
    },

})

module.exports=mongoose.model("product", ProductSchema)