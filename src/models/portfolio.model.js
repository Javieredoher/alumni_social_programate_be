const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
    
    proyect_link: {
            type: String,
            trim: true,        
    },
    deploy: {
        type: String,
        trim: true
    },
    profile_id: {
        type: String
    },
    description_proyect: {
        type: String
    }
})


const Portfolio = model('portfolio', portfolioSchema)

module.exports = Portfolio
