const { Schema, model } = require('mongoose');

const likeSchema = new Schema({
   
    like_count: {
        type: Number,
        required: true,
    },
    post_id: {
        type: Number,
        required: true,
       
    },
    user_id: {
        type: Number,
        required: true,
        
    }
},{ timestamps: true })


const Like = model('likes', likeSchema)

module.exports = Like