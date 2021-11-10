const { Schema, model } = require('mongoose')

const profileSchema = new Schema({

  user_id: {
    type: String
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

// profileSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id
//     delete returnedObject._id
//     delete returnedObject.__v

//   }
// })

const Profile = model('rsprofiles', profileSchema)

module.exports = Profile