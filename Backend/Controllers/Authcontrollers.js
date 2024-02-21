const bcrypt = require("bcryptjs");
const Joi = require("joi");
const User = require("../data/User");
const cookieParser = require('cookie-parser'); 
const jwt = require('jsonwebtoken'); 

// Add this
const secret = 'qwertyuiopasdfghjklzxcvbnmzxcvbnmasdfghjklqwertyuiop'; 

const signupSchema = Joi.object({
    fullname: Joi.string().min(3).max(30).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword: Joi.ref('password'),
}).with('password', 'confirmPassword');

const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const signup = async(req,res) =>{
    try{
        const {error} = signupSchema.validate(req.body);
        if(error) return res.status(400).json({error: error.details[0].message});

        const {fullname,username,password,confirmPassword} = req.body;

        //  Hashing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        
        //  Creating New User 
        const newUser = new User({
            fullname,
            username,
            password:hashedPassword,
            token:'token'
        });
        
        // Save the user or handle error
        await newUser.save();
        
        const token = jwt.sign({username:req.body.username},secret)
        console.log(token)

        // Update the token in the database
        await User.updateOne({_id:newUser._id},{$set:{token:token}})

        res.status(201).json({message: "User created successfully",token:token});
        
    }catch(error){
        console.log("Error in Signup Controller",error.message);
        res.status(500).json({"error":"Internal Server Error"});
    }
}



const login = async(req,res) =>{
    try{
        const {error} = loginSchema.validate(req.body);
        if(error) return res.status(400).json({error: error.details[0].message});

        const {username,password} = req.body;
        
        const user = await User.findOne({username});
        
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Username or Password"});
        }
       

        
        
        res.status(200).json({
            username:user.username,
            fullname:user.fullname,
            token:user.token
        });
        
    }catch(error){
        console.log("Error in Login Controller",error.message);
        res.status(500).json({"error":"Internal Server Error"});
    }
}

// Add this
const logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
}

module.exports = {signup, login, logout};
