const router = require("express").Router();
const Order = require("../models/Order")

//create order
router.post("/order", async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

//update order
router.put("/:id", async (req,res) => {
    try {
        const updatedOrder = await Order.findOneAndUpdate(
            req.params.id,{
                $set: req.body
            },{new:true}
        )
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})
//delete order
router.delete("/:id", async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("order had been deleted...")
    } catch (err) {
        
    }
})
//get all orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})
//get users orders
router.get("/find/:userId", async (req, res) => {
    try {
        const orders = await Order.findById({userId: req.params.userId})
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;