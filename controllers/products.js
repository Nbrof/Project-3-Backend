const router = require("express").Router();

const { Router } = require("express")

const Products = require ("../models/product")

const productsSeed = [
  {
    name: "Chocolate Crunch",
    type: "Filler",
    dairy: False,
    toppings: False,
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
      const songs = await Tunr.find({});
      res.json(songs);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //Create route 
  router.post("/", async (req, res) => {
    try {
      const newSongs = await Tunr.create(req.body);
      res.json(newSongs);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  //Update route
  router.put("/:id", async (req, res) => {
    try {
      const updatedSongs = await Tunr.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedSongs);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //Delete route
  router.delete("/:id", async (req, res) => {
    try {
      const deletedSongs = await Tunr.findByIdAndRemove(req.params.id);
      res.json(deletedSongs);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  module.exports = router
