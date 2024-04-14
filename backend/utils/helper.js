const jwt = require('jsonwebtoken')
const dotenv = require("dotenv").config()

exports = {}

exports.getToken = (email, user)=>{
    const token = jwt.sign({identifier: user._id}, process.env.JWT_SECRET)
    return token
}

module.exports = exports