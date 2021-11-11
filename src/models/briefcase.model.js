const { Schema, model } = require('mongoose');

const briefcaseSchema = new Schema({
    proyectLink: {
            type: String,
            trim: true
        
    },
    deploy: {
        type: String,
        trim: true
    },
    profile_id: {
        type: String
    },
    description: {
        type: String
    }
})


const Briefcase = model('briefcase', briefcaseSchema)

module.exports = Briefcase
