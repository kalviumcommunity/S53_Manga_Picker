const express = require('express')
const mongoose = require('mongoose')
const app = express.Router()
require("dotenv").config()
const Manga = require("../data/schema")

// // Connect to your local MongoDB instance
// mongoose.connect(process.env.MONGO_KEY , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log('Connected to local MongoDB'))
//     .catch(err => console.error('Error connecting to local MongoDB:', err));

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


// update data 
app.put("/update/:postId",async (req,res)=>{
    let postId = req.params.postId;
    let newData = req.body.Title;
    const data = await Manga.findOneAndUpdate({postId:postId}, { Title: newData });
    
    res.send({msg : true , message : "data updated successfully"})

})


//delete data
app.delete("/delete/:id",async (req,res)=>{
    const id  = req.params.id
    console.log(id)
    const data = await Manga.deleteOne({_id : id})
    res.send({msg : true , message : "data deleted successfully"})

})

module.exports = app;