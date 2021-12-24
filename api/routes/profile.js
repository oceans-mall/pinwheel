const router = require("express").Router();
const Profile = require("../models/Profile");
const { verifyTokenAgentAndAdmin, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE FISHERMAN PROFILE
router.post("/fisherman", verifyTokenAgentAndAdmin, async (req, res) => {
  const { firstname, lastname, location, age, region, contact } = req.body;
  const newProfile = new Profile({
    lastname,
    firstname,
    location,
    age,
    region,
    contact,
  });
  try {
    const savedProfile = await newProfile.save();
    res.status(200).json(savedProfile);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PROFILE
router.put("/fisherman/:id", verifyTokenAgentAndAdmin, async (req, res) => {
  try {
    const updatedUser = await Profile.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(403).json(err);
  }
});
//DELETE
router.delete("/fisherman", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.body.id)
    res.status(200).json("profile deleted")
  } catch (err) {
    res.status(401).json(err)
  }
})
//GET FISHER FOLK
router.get("/find/:id", verifyTokenAgentAndAdmin, async (req, res) => {
  try {
    const folk = await Profile.findById(req.params.id);
    const { password, ...others } = folk._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(403).json(err);
  }
});

//GET ALL FISHER-FOLKS
router.get("/folk",verifyTokenAgentAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const fisherman = query
      ? await Profile.find().sort({ _id: -1 }).limit(10)
      : await Profile.find();
    res.status(200).json(fisherman);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
