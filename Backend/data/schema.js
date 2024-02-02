const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MangaSchema = new Schema({
  postId: { type: Number, required: true },  
  Title: { type: String, required: true },   
  Image: String,
  Author: String,
  Likes: Number,
  Comments: Array,
  Time: { type: Date, default: Date.now() }, 
}, { timestamps: true });

module.exports = mongoose.model("Manga", MangaSchema);