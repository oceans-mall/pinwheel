const router = require("express").Router();
const Cart = require("../models/Cart")

//creat cart
router.post("/", async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})

//update cart
router.put("/:id", async (req, res) => {
try {
    const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,{
            $set: req.body
        },{new: true}
    );
    res.status(200).json(updatedCart)
} catch (error) {
    res.status(500).json(err)
}
})

//delete item from cart
router.delete("/:id", async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
})

//get user cart
router.get("/find/:userId", async (req,res) => {
    try {
        const cart = await Cart.findOne({
            userId:req.params.userId
        })
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
} )
//get all cart
router.get("/cart", async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(err)
    }
})

module.exports = router;