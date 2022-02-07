const router = require("express").Router();
const Profile = require("../models/Profile");
const { verifyTokenAgentAndAdmin, verifyTokenAndAdmin } = require("./verifyToken");

//create profile
//verifyTokenAgentAndAdmin
router.post("/fisherman", async (req, res) => {
  const { userId,firstname, lastname, location, age, region, contact } = req.body;
  const newProfile = new Profile({
    userId,
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

//update profile 
//verifyTokenAgentAndAdmin
router.put("/:id", async (req, res) => {
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
//delete Profile
//VerifyTokenAndAdmin
router.delete("/fisherman", async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.body.id)
    res.status(200).json("profile deleted")
  } catch (err) {
    res.status(401).json(err)
  }
})
//get a fisherfolks
//verifyTokenAgentAndAdmin
router.get("/find/:id", async (req, res) => {
  try {
    const folk = await Profile.findById(req.params.id);
    const { password, ...others } = folk._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(403).json(err);
  }
});

//get all fisher folks
//verifyTokenAgentAndAdmin
router.get("/folk", async (req, res) => {
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
