const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    skillName:{
        type:String,
        required: true
    }
})

const skillsModel = mongoose.model('Skill', skillsSchema)

module.exports = skillsModel