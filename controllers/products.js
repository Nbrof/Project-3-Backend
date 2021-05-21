const router = require("express").Router();

const { Router } = require("express")

const Products = require ("../models/product")

const productsSeed = [

  {
    name: "Chocolate Crunch",
    type: "Filler",
    dairy: false,
    toppings: false,
    description: "A tasty Chocolate treat!",
    img: "https://www.notion.so/Design-Assets-4541dddeab9a4707bfbdd56af7fb80b2#8913bc2cf66245f4b11963f0ec2d3eb8",
    price: "3,99$",
    rating: "9/10"
  },


];



//Seed Route

router.get("/", async (req, res) => {
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

  module.exports = router
