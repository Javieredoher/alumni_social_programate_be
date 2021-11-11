const { Schema, model } = require('mongoose')

const commentAlumniSchema = new Schema ({

    user_id:{
        type: String,
        require: true
    },

    text:{
        type: String,
        require: true
    },

    comment_date:{
        timestamps:true
    },
    post_id:{
        type: String,
        require: true 
    }

},{ timestamps: true })
  
  const Comment = model('coments', commentAlumniSchema)
  
  module.exports = Comment