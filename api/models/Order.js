const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    fishermanId: { type: String, required: true },
    products: [
      {
        id: {
          type: String,
        },
        weight: {
          type: Number,
          default: 1,
        },
        cost: {
          type: Number,
        },
        name: {
          type: String,
        },
      },
    ],
    total: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
