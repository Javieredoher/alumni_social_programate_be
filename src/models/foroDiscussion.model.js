const { Schema, model } = require("mongoose");

const foroDiscussionSchema = new Schema(
    {
        id_users: {
            type: String,
            require: true,
        },
        text: {
            type: String,
            require: true,
        },

        date_publisher: {
            timestamps: true,
        },
        images: {
            type: Array,
        },
        tag: {
            question: {
                type: Boolean,
            },

            contributions: {
                type: Boolean,
            },

            challenges: {
                type: Boolean,
            },

            Puntuation_system: {
                type: Number,
                default: 0,
            },
        },

        comments_info: {
            type: Schema.Types.ObjectId,
            ref: "comments",
        },
    },
    { timestamps: true }
);

const Post = model("foroDiscussion", foroDiscussionSchema);

module.exports = ForoDiscussion;
