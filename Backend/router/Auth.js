const express = require('express');
const { signup, login } = require("../Controllers/Authcontrollers");
const User = require('../data/User');

const Authrout = express.Router();
Authrout.get('/',async (req,res)=>{
    const data = await User.find({})

    res.json({msg : true , data : data})

})

Authrout.post("/signup", signup);
Authrout.post("/login", login);

module.exports = Authrout;
