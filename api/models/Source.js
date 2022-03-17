const mongoose = require("mongoose");

const SourceSchema = new mongoose.Schema(
  {
    source: { type: Array, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Source", SourceSchema);
