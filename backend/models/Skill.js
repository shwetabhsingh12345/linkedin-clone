const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    skillsName:{
        type:String,
        required: true
    }
})

const skillsModel = mongoose.model('Skill', skillsSchema)

module.exports = skillsModel