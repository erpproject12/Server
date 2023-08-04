const mongoose = require("mongoose");
const { Schema } = mongoose;

const Purchase_returnSchema = new Schema({
  purchasereturn_bill_no: {
    type: String,
  },
  purchase_return_creditnote: {
    type: String,
  },
  party_code: {
    type: Number,
  },
  party_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "party",
  },
  purchase_return_date: {
    type: String,
    
  },
  purchase_return_totalprice: {
    type: Number,
    require: true,
  },
  purchase_return_discount: {
    type: Number,
  },
  purchase_return_freight: {
    type: Number,
  },
  purchase_return_gtotal: {
    type: Number,
  },
  purchasereturn_vat: {
    type: Number,
    require: true,
  },

  purchase_return_status: {
    type: String,
  },
  purchase_return_item: [
    {
      id: {
        type: Number,
      },
      ItemName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      Batch: {
        type: String,
      },
      Qty: {
        type: Number,
      },
      Discount: {
        type: Number,
      },
      PPrice: {
        type: Number,
      },
      SPrice: {
        type: Number,
      },
      MRP: {
        type: Number,
      },
      Tax: {
        type: Number,
      },
      Total: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("purchase_return", Purchase_returnSchema);
