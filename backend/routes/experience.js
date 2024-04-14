const express = require('express')
const router = express.Router()
const passport = require('passport')
const Experience = require('../models/Experience')

//route to create a new experience
router.post('/create', passport.authenticate("jwt", {session: false}), async(req,res)=>{
    //identifying the user is calling it
    const user = req.user
    //created the experince object
    const experienceObj = {companyName, position, startDate, endDate, description} = req.body
    if(!experienceObj.companyName || !experienceObj.position){
        res.status(403).json({err: "Invalid entry"})
    }
    const newExperience = await Experience.create(experienceObj)
    //added experience to user
    user.experiences.push(newExperience._id)
    await user.save()
    //return a response
    res.status(200).json(newExperience)
})

module.exports = router