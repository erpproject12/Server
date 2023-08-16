const RegisterShcema=require("../model/register");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const Admin_login = async(req,res)=>{
  try{
    const {email,password}=req.body
    const admin = await RegisterShcema.findOne({email})
    if(!admin){

        const success = false;
        return res.status(400).json({ success, error: "incorrect" })

    }
    const passwordCompare = await bcrypt.compare(password,admin.password)
    if(!passwordCompare){
        const success = false;
        return res.status(400).json({ success, error: "incorrect" });
    }
    let data = admin.id
    const authtoken = jwt.sign(data,process.env.JWT_SECRET);
    const success = true;
    res.json({ success, authtoken })
  }
  catch(err){
    console.error(err.message);
    res.status(500).send("Internal some Error occured")
  }
}
module.exports = {Admin_login}