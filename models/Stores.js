const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a Schema
const StoreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    ratings: {
        type: Number,
        default: 3
    }
});

module.exports = Stores = mongoose.model('Stores', StoreSchema);