const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    fisherId: { type: String, required: true , unique:true},
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    region: { type: String, required: true },
    location: { type: String, required: true },
    age: { type: Number, required: true },
    contact: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
