const mongoose = require("mongoose");

const FishSchema = new mongoose.Schema(
    {
        name: {type: String, required:true, unique: true },
        price:{ type: Number, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model("Fish", FishSchema)