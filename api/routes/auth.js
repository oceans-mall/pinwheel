const router = require("express").Router();
const User = require("../models/Users");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./verifyToken");

//REGISTER
router.post("/register", async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;

  const newUser = new User({
    firstname,
    lastname,
    email,
    phone,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),
  });
  try {
    //check if email exist
    if (req.body.email !== (await User.findOne({ email: req.body.email }))) {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } else {
      res.status(403).json("Email exist");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email:req.body.email });
    !user && res.status(401).json("Wrong email!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const InitialPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    InitialPassword !== req.body.password &&
      res.status(401).json("Wrong password!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAgent: user.isAgent,
      },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );
      console.log(user._doc);
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//LOGOUT
// router.get("/logout",verifyToken , (req, res) => {
//   req.user.deleteToken(req.token, (err, user) => {
//     err && res.status(403).json(err);
//   })
//   res.status(200).redirect("/")
// })

module.exports = router;
