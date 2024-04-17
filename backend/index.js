const express = require('express')
const passport = require('passport')
const {ExtractJwt, Strategy} = require('passport-jwt')
const app = express()
const User = require('./models/User')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const authRoutes = require('./routes/auth')
const experienceRoutes = require('./routes/experience')
const skillRoutes = require('./routes/skill')
const projectRoutes = require('./routes/project')

app.use(express.json())

mongoose.connect("mongodb+srv://notebook-db:"+process.env.MONGO_PASSWORD+"@cluster0.sl60upm.mongodb.net/linkedin-clone").then((x)=>{
    console.log("Connected to mongo")
}).catch((err)=>{
    console.log("Error occured while connecting to mongo")
    console.log(err)
})

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_SECRET
passport.use(
    new Strategy(opts, async function(jwt_payload, done){
        try{
            const user = await User.findOne({_id: jwt_payload.identifier})
            if(user){
                done(null, user)
            }
            else{
                done(null, false)
            }
        }catch(err){
            if(err){
                done(err, false)
            }
        }
    })
)

app.use("/auth", authRoutes)
app.use("/experience", experienceRoutes)
app.use("/skill", skillRoutes)
app.use("/project", projectRoutes)

app.listen(8000, ()=>{
    console.log("Running server on Port 3000")
})