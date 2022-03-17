const router = require("express").Router();
const Source = require("../models/Source");

//create source
router.post("/", async (req, res) => {
  const newSource = new Source(req.body);
  try {
    const savedSource = await newSource.save();
    res.status(201).json(savedSource);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get all source
router.get("/", async (req, res) => {
    try {
       const products = await Source.find()
       res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})
//update source
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Source.findByIdAndUpdate(
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

//delete source
router.delete("/:id", async (req, res) => {
    try {
        await Source.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
