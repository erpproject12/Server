
const dotenv = require("dotenv");
const Purchase = require("../model/purchase");

dotenv.config();

// router.post('/insert', async(req,res)=>{

const InsertPurchase = async (req, res) => {
  try {
    console.log("hello");

    // console.log(req.body);
    const {
      bill_no,
      party,
      bill_date,
      subtotal,
      discount,
      vat,
      Freight,
      gtotal,
    } = req.body;

    let purchase_insert = new Purchase({
      purchase_bill_no,
      party_id,
      purchase_bill_date,
      purchase_total_price,
      purchase_discount,
      purchase_freight,
      purchase_gtotal,
    });

    const purch = await purchase_insert.save();
    res.json({ purch });
  } catch (err) {
    console.log("error" + err);
  }
};

module.exports = { InsertPurchase };
