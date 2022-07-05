const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

app.set("view engine", "ejs");
app.use(express.static("public"));



