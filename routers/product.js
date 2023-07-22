const express = require("express")
const router = express.Router()
const { InsertProduct, ViewProduct, DeleteProduct, UpdateProduct } = require('../controller/product')
const { InsertParty,  ViewParty , DeleteParty,UpdateParty } = require ('../controller/party_controller')
const { InsertStock,ViewStock,DeleteStock,UpdateStock } = require ('../controller/stock_controller')
const { InsertPurchase,  ViewPurchase , DeletePurchase,UpdatePurchase } = require ('../controller/purchase_controller')
const {  Insert_purchasedetails, View_purchasedetails, Delete_purchasedetails, Update_purchasedetails } = require ('../controller/purchase_details')
const {  Insert_purchasereturn_details, View_purchasereturn_details, Delete_purchasereturn_details, Update_purchasereturn_details } = require ('../controller/purchasereturn_details')
const {  InsertPurchase_return,ViewPurchase_return ,DeletePurchase_return, UpdatePurchase_return } = require ('../controller/purchase_return_controller')
const {  Insert_salesdetails, View_salesdetails, Delete_salesdetails, Update_salesdetails } = require ('../controller/sales_details_controller')
const {  Insert_salereturn_details, View_salesreturn_details, Delete_salesreturn_details, Update_salesreturn_details } = require ('../controller/sales_return_details')
const {  InsertSales_return,ViewSales_return ,DeleteSales_return, UpdateSales_return } = require ('../controller/sales_return')





//product.............


router.get('/view/:id', ViewProduct )
router.get('/view', ViewProduct )
router.delete('/delete/:id', DeleteProduct )
router.put('/update/:id', UpdateProduct )
router.post('/insert', InsertProduct )


//Party..........
router.post('/party_insert', InsertParty)
router.get('/party_view',  ViewParty)
router.get('/party_view/:id',  ViewParty)
router.delete('/party_delete/:id', DeleteParty)
router.put('/party_update/:id', UpdateParty)


// Purchase..........
router.post('/purchase_insert',  InsertPurchase)
router.get('/purchase_view',  ViewPurchase)
router.get('/purchase_view/:id',  ViewPurchase)
router.delete('/purchase_delete/:id',  DeletePurchase)
router.put('/purchase_update/:id',UpdatePurchase )


// Purchase Details........

router.post('/pdetails_insert',  Insert_purchasedetails)
router.get('/pdetails_view',  View_purchasedetails)
router.get('/pdetails_view/:id',  View_purchasedetails)
router.delete('/pdetails_delete/:id',  Delete_purchasedetails)
router.put('/pdetails_update/:id',Update_purchasedetails  )


// Purchase Return
router.post('/preturn_insert',  InsertPurchase_return)
router.get('/preturn_view',  ViewPurchase_return)
router.get('/preturn_view/:id',  ViewPurchase_return)
router.delete('/preturn_delete/:id',  DeletePurchase_return)
router.put('/preturn_update/:id',UpdatePurchase_return )




// Purchase Return Details

router.post('/preturn_details_insert',  Insert_purchasereturn_details)
router.get('/preturn_details_view',  View_purchasereturn_details)
router.get('/preturn_details_view/:id', View_purchasereturn_details)
router.delete('/preturn_details_delete/:id',  Delete_purchasereturn_details)
router.put('/preturn_details_update/:id',Update_purchasereturn_details  )


//  Sales Details

router.post('/sdetails_insert',  Insert_salesdetails)
router.get('/sdetails_view',  View_salesdetails)
router.get('/sdetails_view/:id',  View_salesdetails)
router.delete('/sdetails_delete/:id',   Delete_salesdetails)
router.put('/sdetails_update/:id',Update_salesdetails  )


// Sales Return


router.post('/sreturn_insert',  InsertSales_return)
router.get('/sreturn_view', ViewSales_return)
router.get('/sreturn_view/:id',  ViewSales_return)
router.delete('/sreturn_delete/:id',  DeleteSales_return)
router.put('/sreturn_update/:id',UpdateSales_return  )



// Sales Return Details

router.post('/sreturn_details_insert',  Insert_salereturn_details)
router.get('/sreturn_details_view',  View_salesreturn_details)
router.get('/sreturn_details_view/:id', View_salesreturn_details)
router.delete('/sreturn_details_delete/:id',  Delete_salesreturn_details)
router.put('/sreturn_details_update/:id',Update_salesreturn_details   )




// Stock

router.post('/stock_insert', InsertStock)
router.get('/stock_view',  ViewStock)
router.get('/stock_view/:id',  ViewStock)
router.delete('/stock_delete/:id',  DeleteStock)
router.put('/stock_update/:id',UpdateStock )


//


module.exports = router