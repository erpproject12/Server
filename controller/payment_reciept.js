const Payment_Reciept_Schema = require("../model/payment_reciept");

const Payment_Reciept_Insert = async (req, res) => {
  try {
    const {
      reciept_no,
      pId,
      recievable_amt,
      pay_mode,
      chequeno,
      transId,
      creditNote,
      recieced_amt,
      pay_date,
      r_narration,
      inv,
      paymentAllocations,
    } = req.body;

    let pay_reciept = new Payment_Reciept_Schema({
      reciept_no: reciept_no,
      party_id: pId,
      invoice_no: inv,
      pay_mode: pay_mode,
      credit_note_no: creditNote,
      cheque_no: chequeno,
      transaction_id: transId,
      total_amount: recievable_amt,
      paid_amount: recieced_amt,
      paid_date: pay_date,
      narration: r_narration,
      payment_details: paymentAllocations,
    });

    const reciept = await pay_reciept.save();
    res.json({ reciept });
  } catch (error) {
    console.log("Error :" + error);
  }
};

const ViewPaymentReciept = async (req, res) => {
  try {
    if (req.params.id) {
      const reciept = await Payment_Reciept_Schema.findById(
        req.params.id
      ).populate([{ path: "party_id" }]);
      return res.json(sales);
    } else {
      const reciept = await Payment_Reciept_Schema.find().populate([
        { path: "party_id" },
      ]);
      return res.json(reciept);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal some error occured");
  }
};
module.exports = { Payment_Reciept_Insert,ViewPaymentReciept };
