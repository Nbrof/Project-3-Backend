const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const loginSchema = new Schema(
  {
    email: String,
    pass: String,
  },
  { timestamps: true }
);

const Login = model("Login", loginSchema);

module.exports = Login;
