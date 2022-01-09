const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userId: {type: String, required:true},
        products: [
            {
                productId:{
                    type: String,
                },
                quantity:{
                    type: Number,
                    default: 1
                }
            }
        ],
        amount: {type: Number, required},
        status: { type: String, default:"pending"}
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", userSchema)