const mongoose = require ('mongoose');
const {Schema} =mongoose

const partySchema = new Schema ({

    party_name:{
        type:String,
        require:true
    },
    party_phone:{
        type:Number,
        require:true
    },
    party_email:{
        type: String,
        require:true
    },
    party_address:{
        type:String,
        require:true
    },
party_state:{
type:String,
require:true
},

party_city:{
    type:String,
    
},

party_strete:{
    type:String,
    require:true
},
party_pincode:{
    type:Number,
    require:true
},
party_country:{
    type:String,
    require:true
},

party_GST:{
    type:String,
    require:true
},
party_account_type:{
    type:String,
    require:true
},
party_creadit_limit:{
    type:String,
    
},

party_creadit_days:{
    type:Number
},
party_status:{
    type:String,

},

party_date:{
    type:Date,
    default:Date.now
},
party_updated_date:{
    type:Date,
    default:Date.now
}

})
module.exports = mongoose.model("party",partySchema)