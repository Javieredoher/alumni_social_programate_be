const { Schema, model } = require('mongoose')

const commentAlumniSchema = new Schema({

  user_id: {
    type: String,
    require: true
  },

  comment: {
    type: String,
    require: true
  }

}, { timestamps: true })

const Comment = model('comments', commentAlumniSchema)

module.exports = Comment