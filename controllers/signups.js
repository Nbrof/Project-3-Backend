const router = require("express").Router();

const { Router } = require("express")

const Signup = require("../models/signup")
const signupSeed = require("../db/seedDataSignup.json")

// const signupSeed = [

//   {
//     name: "Jane Doe",
//     pass: "23ddgw",
//     email: "dogsncats@gmail.com",
//     address: "234 Alfred Ave",
//   },


// ];



//Seed Route

router.get("/", async (req, res) => {
    try {
      await Signup.remove({});
      await Signup.create(signupSeed);
      const signups = await Signup.find({});
      res.json(signups);
    } catch (error) {
      res.status(400).json(error);
    }
  });


 //Index route  
  router.get("/", async (Req, res) => {
    try {
      const signups = await Signup.find({});
      res.json(signups);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //Create route 
  router.post("/", async (req, res) => {
    try {
      const newSignup = await Signup.create(req.body);
      res.json(newSignup);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  //Update route
  router.put("/:id", async (req, res) => {
    try {
      const updatedSignup = await Signup.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedSignup);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //Delete route
  router.delete("/:id", async (req, res) => {
    try {
      const deletedSignup = await Signup.findByIdAndRemove(req.params.id);
      res.json(deletedSignup);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  module.exports = router
