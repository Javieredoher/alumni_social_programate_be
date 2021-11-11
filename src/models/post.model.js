const { Schema, model } = require('mongoose')

const postSchema = new Schema({

  user_info: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  like_info: {
    type: Schema.Types.ObjectId,
    ref: 'likes'
  },
  comments_info: {
    type: Schema.Types.ObjectId,
    ref: 'comments'
  },
  description: {
    type: String
  },

  images: {
    type: Array,
  },
  link: {
    type: String,
  },
  tags: {
    type: Array,
  },

}, { timestamps: true })



const Post = model('posts', postSchema)

module.exports = Post;