require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express")
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors())
const router  = require('./routers/product')
app.use('/api',router)

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('connected to db $ listening on port',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

