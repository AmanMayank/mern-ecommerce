const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const productImageModel = mongoose.model("productImage", productImageSchema);

module.exports = productImageModel;
