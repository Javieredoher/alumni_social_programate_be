const { Schema, model } = require("mongoose");

const foroCommentsSchema = new Schema({
    id_publisher: {
        type: String,
        require: true,
    },

    id_disscusion: {
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
    date_comments: {
        timestamps: true,
    },

    /*   Editor_WYSIWYG: {
        type: Object,
    }, */

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
});

const Foro = model("foroComments", foroCommentsSchema);

module.exports = ForoComments;
