const RegisterShcema=require("../model/register");

const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const AdminRegister = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        const Admin = new RegisterShcema({name,email,password:secPass});
        const register = await Admin.save();
        res.json(register);
    }   
    catch(error){
        console.log(error);
        res.status(500).send("Internal Error Occured");
    }
}
module.exports = {AdminRegister};