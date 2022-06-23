const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());


// database connection
const DB = process.env.DATABASE;
const PORT = process.env.PORT;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { 
        console.log('Connected to MongoDB'); 
        app.listen(PORT); 
    })
    .catch((err) => {
        console.log('Cannot connect to mongoDB');
        console.log(err);
    });

// routes
// app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', (req, res) => res.render('smoothies'));

app.use(authRoutes);