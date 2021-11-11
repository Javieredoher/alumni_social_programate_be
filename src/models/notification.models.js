const { Schema, model } = require("mongoose");

const notificationSchema = new Schema(
    {
        user_id_to: {
            type: String,
            require: true,
            ref: "user",
        },
        user_id_from: {
            type: String,
            require: true,
            ref: "post",
        },
        post_id: {
            type: String,
            require: true,
            ref: "post",
        },
        type_post: {
            like_id: {
                type: Boolean,
                default: true,
            },
            comment_id: {
                type: Boolean,
                default: false,
            },
        },
    },
    { timestamps: true }
);

const Notification = model("Notification", notificationSchema);

module.exports = Notification;
