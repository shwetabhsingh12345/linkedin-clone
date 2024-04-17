const express = require('express')
const router = express.Router()
const passport = require('passport')
const Project = require('../models/Project')

//route to create a new project
router.post('/create', passport.authenticate('jwt', {session:false}), async(req, res)=>{
//identify the user is calling it
    const user = req.user
//created the project object
    const {name, description ,links} = req.body
    if(!name){
        res.status(403).json({err: "Invalid entry"})
    }
    const projectObj = {name, description, links}
    const newProject = await Project.create(projectObj)
//added the project to user
    user.projects.push(newProject._id)
    await user.save()
//return a response
    res.status(200).json(newProject)
})

module.exports = router