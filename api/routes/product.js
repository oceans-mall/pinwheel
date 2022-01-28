const router = require("express").Router();
const Products = require("../models/Products");

//create product
router.post("/", async (req, res) => {
  const newProduct = new Products(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get product
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    }
})
//get all products
router.get("/", async (req, res) => {
    try {
       const products = await Products.find()
       res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})
//update product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete product
router.delete("/:id", async (req, res) => {
    try {
        await Products.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
})
