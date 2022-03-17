const router = require("express").Router();
const Fish = require("../models/Fish");

router.post("/", async (req, res) => {
  const newFish = new Fish(req.body);
  try {
    const savedFish = await newFish.save();
    res.status(200).json(savedFish);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const fish = await Fish.find();
    res.status(200).json(fish);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedFish = await Fish.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFish);
  } catch (error) {res.status(500).json(err)}
});
module.exports = router;