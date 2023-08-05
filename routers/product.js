const express = require("express")
const router = express.Router()
const Product = require('../model/product')
const { InsertProduct, ViewProduct, DeleteProduct, UpdateProduct } = require('../controller/product')
const {InsertParty,ViewParty,UpdateParty,DeleteParty} = require('../controller/party')
const {InsertPurchase} = require('../controller/purchase')
const {InsertSales,ViewSales,DeleteSales,UpdateSales} = require('../controller/sales')
// router.get("/get",(req,res)=>{
//     res.json({message:"hello"})
    
// })

router.post('/insert', InsertProduct )

router.get('/view', ViewProduct )

router.get('/view/:id', ViewProduct )

router.delete('/delete/:id', DeleteProduct )

router.put('/update/:id', UpdateProduct )

// //party
router.post('/party_insert',InsertParty)

router.get('/view_party',ViewParty)

router.get('/view_party/:id',ViewParty)

router.put('/party_update/:id',UpdateParty)

router.delete('/party_delete/:id',DeleteParty)

//purchase
router.post('/purchase_insert',InsertPurchase)


//sales
router.post('/sales_insert',InsertSales)
router.get('/view_sales',ViewSales)
router.get('/view_sales/:id',ViewSales)
router.delete('/delete_sales/:id',DeleteSales)
router.put('/update_sales/:id',UpdateSales)


module.exports = router