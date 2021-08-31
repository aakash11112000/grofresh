const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Stores = require('./routes/api/StoreRoutes');
const Contact = require('./routes/api/ContactRoutes');

// Init express app
const app = express();

// Middleware for handling CORS issues
app.use(cors());

// Connect to mongodb
const db = 'mongodb://localhost:27017/grofresh_db'; // MongoDB URI
mongoose.connect(db)
    .then(() => console.log('Mongo is connected...'))
    .catch((err) => console.log(err));

//Middleware for parsing the body
app.use(express.json());

// Route all /api/stores to the StoreRoutes file
app.use('/api/stores', Stores);

// Route all /api/contact/add to the ContactRoutes file
app.use('/api/contact/add', Contact);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server started at port ${PORT}`)});