const bcrypt = require("bcryptjs");
const Joi = require("joi");
const User = require("../data/User");


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

        // ^ Hashing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // ! Creating New User 
        const newUser = new User({
            fullname,
            username,
            password:hashedPassword
        });

        // Save the user or handle error
        await newUser.save();

        res.status(201).json({message: "User created successfully"});

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
        //* Checking If The User Exists In Database Or Not
        const user = await User.findOne({username});
        
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Username or Password"});
        }

        res.status(200).json({
            username:user.username,
            fullname:user.fullname
        });

    }catch(error){
        console.log("Error in Login Controller",error.message);
        res.status(500).json({"error":"Internal Server Error"});
    }
}

module.exports = {signup,login};

