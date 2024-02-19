const express = require('express');
const { signup, login } = require("../Controllers/Authcontrollers");

const Authrout = express.Router();

Authrout.post("/signup", signup);
Authrout.post("/login", login);

module.exports = Authrout;
