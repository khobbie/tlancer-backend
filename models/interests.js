const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    interest: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Interests', dataSchema)