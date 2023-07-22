const StockSchema = require('../model/stock_model');
const dotenv = require('dotenv')

dotenv.config();

const InsertStock = async (req,res)=>{

    try{

        const { stock_product,stock_product_batch,product_exp_date,product_unit_price, stock_MRP, stock_product_qty, stock_total_price, stock_sell_price } = req.body

        let stock_insert = new StockSchema ({ stock_product,stock_product_batch,product_exp_date,product_unit_price, stock_MRP, stock_product_qty, stock_total_price, stock_sell_price })
        
        const stock = await stock_insert.save();
        res.json(stock)



    }catch(err){

        console.log("error"+err)

    }

}

const ViewStock = async (req,res)=>{

    try{

        if(req.params.id){
            const stock = await StockSchema.findById(req.params.id);
            return res.json(stock)

        }else{
          const stock = await StockSchema.find()
          return res.json(stock)
        }

    }catch(err){
          console.log(err.message);
          res.status(500).send("Internal some error occured");

    }
}

const DeleteStock = async (req,res)=>{

    try{
           let id = req.params.id;
           let stock = await StockSchema.findById(id);
           if(!stock){
            res.json({success:false, message:"Stock not fount"})
           }

           let deletestock = await StockSchema.findByIdAndDelete(id)
           return res.json({success:true, deletestock})


    }catch(err){
        res.json({success:false, message:"Internal server error"})
        console.log(err.message)
        
    }

}


const UpdateStock = async (req,res)=>{

    try{

        let id = req.params.id;
        const { stock_product,stock_product_batch,product_exp_date,product_unit_price, stock_MRP, stock_product_qty, stock_total_price, stock_sell_price } = req.body
         
        let stock = await StockSchema.findById(id)

        if(!stock){
            return res.json({ success:false, message:"Stock Not Found"
            })
        }

        let newStock= {}

        if(stock_product) {newStock.stock_product = stock_product}
        if(stock_product_batch) {newStock.stock_product_batch = stock_product_batch}
        if(product_exp_date) {newStock.product_exp_date = product_exp_date}
        if(product_unit_price) {newStock.product_unit_price = product_unit_price}
        if(stock_MRP) {newStock.stock_MRP = stock_MRP}
        if(stock_product_qty) {newStock.stock_product_qty = stock_product_qty}
        if(stock_total_price) {newStock.stock_total_price = stock_total_price}
        if(stock_sell_price) {newStock.stock_sell_price = stock_sell_price}

        let updatedstock = await StockSchema.findByIdAndUpdate(id, { $set: newStock }, { new: true })
        res.json({ success: true, updatedstock})

          
    }catch(err){

        res.json({ success: false, message: "Internal server error!!!" })
        console.log(err)

    }

}



module.exports = { InsertStock,ViewStock,DeleteStock,UpdateStock }