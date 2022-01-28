const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const tradeRoute = require("./routes/trade")
const profileRoute = require("./routes/profile")
const productRoute = require("./routes/product")
const cors = require('cors')

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("DBConnection successful")
).catch((err) => {
    console.log(err)
})

app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoute )
app.use("/api/user", userRoute)
app.use("/api/trade", tradeRoute)
app.use("/api/product",productRoute)
app.use("/api/profile", profileRoute)




app.listen(process.env.PORT || 4000, () => {
    console.log('Backend server is running!');
})