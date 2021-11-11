const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
    proyectLink: {
        type: Array,
        trim: true
    },
    deploy: {
        type: Array,
        trim: true
    },
    profile_id: {
        type: String
    },
    description_proyect: {
        type: String
    }
})


const Portfolio = model('portfolio', portfolioSchema);

module.exports = Portfolio;
