const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullname : {
        type:String,
        required: true
    },
    username :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})

const User = mongoose.model("User",UserSchema );

module.exports = User;
