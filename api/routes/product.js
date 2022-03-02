const router = require("express").Router();
const Product = require("../models/Products");

const multer = require("multer");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: Storage }).single("productImage");

//create product
router.post("/", upload, async (req, res) => {
  const { desc, size, inStock, name, price } = req.body;
  const imgData = req.file.filename;
  //convert the image to base 64 string
  var encode_img = imgData.toString('base64');

  const newProduct = new Product({
    desc,
    name,
    size,
    inStock,
    price,
    img: {
      data: Buffer.from(encode_img, 'base64') ,
      contentType: req.file.mimetype 
    },
  });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
//find product by id
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
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
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
