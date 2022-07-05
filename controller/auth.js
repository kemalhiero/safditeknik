const model = require("../models/users");
const controller = {};
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(email) {
  return jwt.sign(email, process.env.TOKEN, { expiresIn: "1d" });
}

controller.tampillogin = async function (req, res) {
    const token = req.cookies.token;
    if (token) return res.redirect('/');
    
    res.render("auth/login");
  }

controller.tampilregister = async function (req, res) {
    res.render("auth/register");
}



module.exports = controller;