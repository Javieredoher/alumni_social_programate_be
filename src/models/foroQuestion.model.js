const { Schema, model } = require("mongoose");

const foroQuestionSchema = new Schema(
    {
        user_info: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: "likes",
            },
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "comments",
            },
        ],
        title: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
            lowercase: true,
            default: "question",
        },
        description: {
            type: String,
        },
        profile: {
            type: String,
        },
        images: {
            type: String,
        },
        tags: {
            type: Array,
        },
        dateEvent: {
            type: Date,
        },
    },
    { timestamps: true }
);

const ForoQuestion = model("foroQuestions", foroQuestionSchema);

module.exports = ForoQuestion;
