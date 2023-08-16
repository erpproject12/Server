const mongoose = require('mongoose');
const {Schema} = mongoose;
const RegisterShcema = new Schema({
    name:{
        type:String,
       
    },
    email:{
        type:String,
       

    },
    password:{
        type:String,
       
    },
})
module.exports=mongoose.model("admin",RegisterShcema)