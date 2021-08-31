const express = require('express');
const router = express.Router();

//Stores Mongo model
const Stores = require('../../models/Stores');

// @route - /api/stores
// @desc - Get all the stores in the collection
router.get('/', (req, res) => {
    Stores.find()
        .then(stores => res.json(stores));
})

module.exports = router;