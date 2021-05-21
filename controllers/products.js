const router = require("express").Router();

const { Router } = require("express");

const Products = require("../models/product");

const productsSeed = [
  {
    name: "Chocolate Crunch",
    type: "Filler",
    dairy: false,
    toppings: false,
    description: "A tasty Chocolate treat!",
    img: "https://images.unsplash.com/photo-1558500113-0d9cc3fa25ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "$3.99",
    rating: "9/10",
  },
];

//Seed Route

router.get("/seed", async (req, res) => {
  try {
    await Products.remove({});
    await Products.create(productsSeed);
    const products = await Products.find({});
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Index route
router.get("/", async (Req, res) => {
  try {
    const products = await Products.find({});
    res.json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Create route
router.post("/", async (req, res) => {
  try {
    const newProducts = await Products.create(req.body);
    res.json(newProducts);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Update route
router.put("/:id", async (req, res) => {
  try {
    const updatedProducts = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProducts);
  } catch (error) {
    res.status(400).json(error);
  }
});

//Delete route
router.delete("/:id", async (req, res) => {
  try {
    const deletedProducts = await Products.findByIdAndRemove(req.params.id);
    res.json(deletedProducts);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
