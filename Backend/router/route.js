const express = require('express')
const mongoose = require('mongoose')
const app = express.Router()
require("dotenv").config()
const Manga = require("../data/schema")


//read
app.get('/',async (req,res)=>{
    const data = await Manga.find({})

    res.json({msg : true , data : data})

})

// create data 
app.post("/create",async (req,res)=>{
    console.log(req.body)
    const data = new Manga(req.body)
    await data.save()
    res.send({msg : true , message : "data saved successfully"})
})
app.put("/update/:_id", async (req, res) => {
    let _id = req.params._id;
    let newTitle = req.body.Title;
    let newAuthor = req.body.Author;
    let newImage = req.body.Image;
    const data = await Manga.findOneAndUpdate({_id: _id}, { Title: newTitle, Author: newAuthor, Image: newImage });
    res.send({msg : true , message : "Data updated successfully"});
});

// Delete data
app.delete("/delete/:_id", async (req, res) => {
    const _id  = req.params._id;
    console.log(_id);
    const data = await Manga.deleteOne({_id : _id});
    
    res.send({msg : true , message : "data deleted successfully"});
});


module.exports = app;