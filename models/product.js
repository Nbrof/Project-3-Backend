const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const productSchema = new Schema(
  {
    name: String,
    type: String,
    dairy: Boolean,
    toppings: Boolean,
    description: String,
    img: String,
    price: String,
    rating: String,
  },
  { timestamps: true }
);

const product = model("Product", productSchema);

module.exports = Product;
