const express = require("express")
const router = express.Router()
const Product = require('../model/product')
const { InsertProduct, ViewProduct, DeleteProduct, UpdateProduct } = require('../controller/product')
const {InsertParty,ViewParty,UpdateParty,DeleteParty} = require('../controller/party')
const {UpdateOpeningStock1,UpdateOpeningStock2} = require('../controller/openingstock')
const {InsertPurchase} = require('../controller/purchase')

const {Insert_Sales_return,View_Sales_Return,UpdateSalesReturn,SalesDelete} = require('../controller/sales_return')


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


router.post('/sale_insert',Insert_Sales_return)

router.get("/view_sale_return",View_Sales_Return)

router.get("/view_sales_return/:id",View_Sales_Return)

router.put("/update_sales/:id",UpdateSalesReturn)

router.delete("/delete_sales/:id",SalesDelete);


//Purchase Return
router.post('/purchasereturn_insert',InsertPurchaseReturn)
router.get('/purchasereturn_view',ViewPurchaseReturn)
router.get('/purchasereturn_view/:id',ViewPurchaseReturn)
router.delete('/purchasereturn_delete/:id',DeletePurchaseReturn)
router.get('/updateparty_view/:id',ViewUpdateParty)

//Opening Stocks
router.put('/update_openingstock1/:id',UpdateOpeningStock1)
router.put('/update_openingstock2/:id',UpdateOpeningStock2)


module.exports = router