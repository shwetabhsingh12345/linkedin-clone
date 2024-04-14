const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String, required:true
    },
    lastName:{
        type:String, required:false
    },
    email:{
        type:String, required:true
    },
    password:{
        type:String, required:true
    },
    experiences:[
        {
            type: String
        }
    ],
    projects:[
        {
            type:String
        }
    ],
    skills:[
        {
            type:String
        }
    ]
})

const User = mongoose.model('User', userSchema)

module.exports = User
