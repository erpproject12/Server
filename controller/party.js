const Partyschema = require('../model/party');
const dotenv = require ('dotenv');

dotenv.config()

const InsertParty = async (req,res)=>{
try{
    const {party_name,party_phone,party_email,party_address,party_street,party_city,party_state,party_pincode,party_country,party_GST,party_account_type,party_creadit_limit,party_creadit_days} =req.body
    
    let party_insert = new Partyschema ({ party_name,party_phone,party_email,party_address,party_street,party_city,party_state,party_pincode,party_country,party_GST,party_account_type,party_creadit_limit,party_creadit_days})

    const party =await party_insert.save();
    res.json({party})

}catch(err){
    console.log("error"+err)
}
}


const ViewParty = async (req,res)=>{
    try{
        if(req.params.id){
            const partyv = await Partyschema.findById(req.params.id);
            res.json(partyv) 
        }else{
        const partyv = await Partyschema.find();
        res.json(partyv)
    } }catch(err){
        console.error(err.message);
        res.status(500).send("Internal some error occured");

}
}

const DeleteParty = async (req,res)=>{
    try{
    let id =req.params.id;
    let party = await Partyschema.findById(id);
    if(!party){
        res.json({success: false, message: "Party Not Found!!!"})
    }
    let deleteparty = await Partyschema.findByIdAndDelete(id)
    return res.json({success: true, deleteparty})
}catch(err){
    res.json({success:false,message:"Internal server error!!!"})
    console.log(err)
}

}

const UpdateParty = async (req,res)=>{

    try{
        let id = req.params.id;
        const {  party_name,party_phone,party_email,party_address,party_street,party_city,party_state,party_pincode,party_country,party_GST,party_account_type,party_creadit_limit,party_creadit_days} =req.body
        let party = await Partyschema.findById(id)
        if(!party){
            return res.json({success: false, message:"Party Not Found!!!"})
        }
        let newParty = {}
        if (party_name) {newParty.party_name = party_name}
        if (party_phone) {newParty.party_phone = party_phone}
        if (party_email) {newParty. party_email = party_email}
        if (party_address) {newParty.party_address = party_address}
        if (party_street) {newParty.party_street = party_street}
        
        if (party_city) {newParty.party_city = party_city}
       
        if (party_state) {newParty.party_state = party_state}
        if (party_pincode) {newParty.party_pincode = party_pincode}
        if (party_country) {newParty.party_country = party_country}
        if (party_GST) {newParty.party_GST= party_GST}
        if (party_account_type) {newParty.party_account_type = party_account_type}
        if (party_creadit_limit) {newParty.party_creadit_limit = party_creadit_limit}

        if (party_creadit_days) {newParty.party_creadit_days = party_creadit_days}

        let updatedparty = await Partyschema.findByIdAndUpdate(id, { $set: newParty }, { new: true })
        res.json({ success: true, updatedparty })
    }
    catch (err) {
        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)
    }

    }




module.exports = {InsertParty,ViewParty,UpdateParty,DeleteParty}