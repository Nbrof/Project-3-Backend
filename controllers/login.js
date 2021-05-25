const router = require("express").Router();

const { Router } = require("express")

const Login= require("../models/login")
const loginSeed = require("../db/seedDataLogin.json")

// const loginSeed = [

//   {
    // email: "dogsncats@gmail.com",
//     pass: "23ddgw",
//     
//   },


// ];



//Seed Route

router.get("/", async (req, res) => {
    try {
      await Login.remove({});
      await Login.create(loginSeed);
      const logins = await Login.find({});
      res.json(logins);
    } catch (error) {
      res.status(400).json(error);
    }
  });


 //Index route  
  router.get("/", async (Req, res) => {
    try {
      const logins = await Login.find({});
      res.json(logins);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //Create route 
  router.post("/", async (req, res) => {
    try {
      const newLogin = await Login.create(req.body);
      res.json(newLogin);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  //Update route
  router.put("/:id", async (req, res) => {
    try {
      const updatedLogin = await Login.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedLogin);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //Delete route
  router.delete("/:id", async (req, res) => {
    try {
      const deletedLogin = await Login.findByIdAndRemove(req.params.id);
      res.json(deletedLogin);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  module.exports = router
