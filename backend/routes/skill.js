const express = require('express')
const router = express.Router()
const passport = require('passport')
const Skill = require('../models/Skill')

//route to create a new skill
router.post('/create', passport.authenticate('jwt', {session:false}), async(req, res)=>{
//idetify the user is calling it
    const user = req.user
//created the skill object
    const {skillName} = req.body
    if(!skillName){
        res.status(403).json({err: "invalid entry"})
    }
    const skillObj = {skillName}
    const newSkill = await Skill.create(skillObj)
//added skill to user
    user.skills.push(newSkill._id)
    await user.save()
//return a response
res.status(200).json(newExperience)
})

module.exports = router