const { Schema, model } = require('mongoose')

const profileSchema = new Schema({

  user_info: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  experience: {
    type: Array,
    trim: true,
  },

  prev_studes: {
    type: Array,

  },
  description: {
    type: String,
    trim: true,

  },
  github: {
    type: String,
    trim: true,
    lowercase: true
  },
  softSkills: {
    type: Array,
    trim: true,
    lowercase: true

  },
  technicalSkills: {
    type: Array,
    trim: true,
    lowercase: true
  },



})



const Profile = model('rsprofiles', profileSchema)

module.exports = Profile