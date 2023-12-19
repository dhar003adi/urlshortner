const User = require("../models/User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET_KEY = "yowaimohehehe"

const register = async(req,res)=>{
    try {
        const {email,password} = req.body

        const existingUser = await User.findOne({email})

        if(existingUser) {
            return res.status(400).json({message:"User already exists"})
        }else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,salt)

            const newUser = await User.create({
                username:req.body.username,
                email:email,
                password:hashedPassword
            });

            const token = jwt.sign({id:newUser._id},SECRET_KEY,{expiresIn:'1h'})

            res.json(token)
        }

        
    } catch (error) {
        console.log({error:"error in register route"});
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body

        const user = await User.findOne({email})
        if(!user) {
            return res.status(401).json({message:"invalid credentials"})
        }

        const ispasswordvalid = await bcrypt.compare(password,user.password)
        if(!ispasswordvalid) {
            return res.status(401).json({message:"invalid user credentials"})
        }

        const token = jwt.sign({id:user.id},SECRET_KEY,{expiresIn:'1h'})
        res.json({token,message:"user logged in"})
    } catch (error) {
        console.log({message:"internal server error"});
    }
}

module.exports = {
    register,
    login
}