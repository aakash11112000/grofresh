const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a Schema
const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = Contact = mongoose.model('Contact', ContactSchema);