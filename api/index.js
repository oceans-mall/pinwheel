const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const orderRoute = require("./routes/order");
const profileRoute = require("./routes/profile");
const productRoute = require("./routes/product");
const sourceRoute = require("./routes/source");
const cartRoute = require("./routes/cart");
const fishRoute = require("./routes/fish")

const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/product", productRoute);
app.use("/api/source", sourceRoute);
app.use("/api/profile", profileRoute);
app.use("/api/cart", cartRoute);
app.use("/api/fish", fishRoute)

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running!");
});
