const ProductSchema= require("../model/product");
const dotenv = require("dotenv");

dotenv.config();

const UpdateOpeningStock1=async(req,res)=>{
  const {batch,exp_date,qty,price,sell_price,MRP,total} = req.body;
  try{
    const newOpeningStock={};
    if(batch){newOpeningStock.batch=batch};
    if(exp_date){newOpeningStock.exp_date=exp_date};
    if(qty){newOpeningStock.qty=qty};
    if(price){newOpeningStock.price=price};
    if(sell_price){newOpeningStock.sell_price=sell_price};
    if(MRP){newOpeningStock.MRP=MRP};
    if(total){newOpeningStock.total=total};

    let productStock=await ProductSchema.findById(req.params.id);
    if(!productStock){
      return res.status(404).send("Not Found")
    }

    productStock=await ProductSchema.findByIdAndUpdate(req.params.id,{$set:newOpeningStock ,new:true})

    res.json({productStock})

    console.log(productStock);
  }
  catch(error){
    console.error(error.message);
    res.status(500).send("Internal some occured.")
  }
}


const UpdateOpeningStock2=async(req,res)=>{
  const {batch,exp_date,qty,price,sell_price,MRP,total} = req.body;
  try{
    const newOpeningStock={};
    if(batch){newOpeningStock.batch=batch};
    if(exp_date){newOpeningStock.exp_date=exp_date};
    if(qty){newOpeningStock.qty=qty};
    if(price){newOpeningStock.price=price};
    if(sell_price){newOpeningStock.sell_price=sell_price};
    if(MRP){newOpeningStock.MRP=MRP};
    if(total){newOpeningStock.total=total};

    let productStock=await ProductSchema.findById(req.params.id);
    if(!productStock){
      return res.status(404).send("Not Found")
    }

    productStock=await ProductSchema.findByIdAndUpdate(req.params.id,{$set:newOpeningStock ,new:true})

    res.json({productStock})

    console.log(productStock);
  }
  catch(error){
    console.error(error.message);
    res.status(500).send("Internal some occured.")
  }
}


const ViewStock = async (req, res) => {
  try {
    if (req.params.id) {
      const stock = await StockSchema.findById(req.params.id);
      return res.json(stock);
    } else {
      const stock = await StockSchema.find();
      return res.json(stock);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal some error occured");
  }
};

const DeleteStock = async (req, res) => {
  try {
    let id = req.params.id;
    let stock = await StockSchema.findById(id);
    if (!stock) {
      res.json({ success: false, message: "Stock not fount" });
    }

    let deletestock = await StockSchema.findByIdAndDelete(id);
    return res.json({ success: true, deletestock });
  } catch (err) {
    res.json({ success: false, message: "Internal server error" });
    console.log(err.message);
  }
};



module.exports = { UpdateOpeningStock1,UpdateOpeningStock2, ViewStock, DeleteStock};
