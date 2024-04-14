const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { getToken } = require('../utils/helper')
const router = express.Router()

router.post('/register', async(req, res)=>{
    //getting user details
    const {firstName, lastName, email, password} = req.body
    if (!firstName || !email || !password){
        return res.status(400).json({err: "Please provide all details"})
    }
    //checking if user already exists
    const existingUser = await User.findOne({email: email})
    if (existingUser){
        return res.status(402).json({err: "A user already exists"})
    }
    //creating new user with hashed password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUserDetails = {firstName, lastName, email, password: hashedPassword}
    const newUser = await User.create(newUserDetails)

    //creating jwt of newUser and returning token
    const token = getToken(email, newUser)

    //returning actual user created along with generated token
    const userToReturn = {...newUser.toJSON(), token}
    delete userToReturn.password //for security reason
    return res.status(200).json(userToReturn)
})

router.post('/login', async(req, res)=>{
    //get the details from the body
    const {email, password} = req.body
    if(!email || !password){
        return res.status(401).json({err: "Invalid email or password"})
    }

    //verifying if the user exists with the provided email
    const user = await User.findOne({email: email})
    if(!user){
        return res.status(401).json({err: "Invalid email or password"})
    }
    //verify if the password provided is correct
    const isValidPassword = await bcrypt.compare(password, user.password)
    if(!isValidPassword){
        return res.status(401).json({err: "Invalid email or password"})
    }
    //generate a jwt token with helper function and return it
    const token = getToken(email, user)
    const userToReturn = {...user.toJSON(), token}
    delete userToReturn.password
    return res.status(200).json(userToReturn)
})

module.exports = router