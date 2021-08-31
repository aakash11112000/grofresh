const express = require('express');
const router = express.Router();

//Stores Mongo model
const Contact = require('../../models/Contact');

router.post('/', (req, res) => {
    const contactDetails = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        description: req.body.description
    })
    contactDetails.save()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
})

module.exports = router;