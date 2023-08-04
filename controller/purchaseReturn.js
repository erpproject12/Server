const PurchaseReturnSchema = require("../model/purchaseReturn");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

const InsertPurchaseReturn = async (req, res) => {
  console.log(req);
  try {
    const {
      BillNo,
      BillDate,
      Party,
      rows,
      SubTotal,
      Discount,
      Vat,
      Freight,
      gtotal,
    } = req.body;

    let purchasereturn_insert = new PurchaseReturnSchema({
      party_id: Party,
      purchasereturn_bill_no: BillNo,
      purchase_return_date: BillDate,
      purchase_return_totalprice: SubTotal,
      purchase_return_discount: Discount,
      purchase_return_freight: Freight,
      purchase_return_gtotal: gtotal,
      purchasereturn_vat: Vat,
      purchase_return_item: rows,
    });
    const purch = await purchasereturn_insert.save();
    res.json({ purch });
  } catch (error) {
    console.log("error" + error);
  }
};

const ViewPurchaseReturn = async (req, res) => {
  try {
    if (req.params.id) {
      const exm = await PurchaseReturnSchema.findById(req.params.id).populate([{
        path:'party_id'},{path: 'purchase_return_item.ItemName'}]
      ); //singlr ptoduct view insted of using another single api we can use if condition
      return res.json(exm);
    } else {
      const exm = await PurchaseReturnSchema.find().populate("party_id"); //schema = Product
      return res.json(exm);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal some error occured");
  }
};

const ViewUpdateParty = async (req, res) => {
  try {
    if (req.params.id) {
      
      const exm = await PurchaseReturnSchema.find().populate("party_id"); //schema = Product
      return res.json(exm);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal some error occured");
  }
};

const DeletePurchaseReturn = async (req, res) => {
  try {
    let id = req.params.id;
    let purchase_return = await PurchaseReturnSchema.findById(id); //schema
    if (!purchase_return) {
      res.json({ success: false, message: "Product Not Found!!!" });
    }
    let delete_purchase_return = await PurchaseReturnSchema.findByIdAndDelete(
      id
    ); //schema
    return res.json({ success: true, delete_purchase_return });
  } catch (err) {
    res.json({ success: false, message: "Internal server error!!!" });
    console.log(err);
  }
};


module.exports = {
  InsertPurchaseReturn,
  ViewPurchaseReturn,
  //   ViewInnerJoinReturn,
  DeletePurchaseReturn,
  ViewUpdateParty
};
