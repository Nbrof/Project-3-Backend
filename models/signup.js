const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const signupSchema = new Schema(
  {
    name: String,
    pass: String,
    email: String,
    address: String,
  },
  { timestamps: true }
);

const signup = model("Signup", signupSchema);

module.exports = Signup;
