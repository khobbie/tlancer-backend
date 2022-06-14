const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nationalId: {
        required: true,
        type: String
    },
    details: {
        required: true,
        type: Object
    }


})

module.exports = mongoose.model('IDS', dataSchema)