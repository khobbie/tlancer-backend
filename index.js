require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const path = require('path');
const mongoString = process.env.REMOTE_DATABASE_URL;




mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();


app.use(express.json({ limit: '50mb' }));
// app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', async(req, res) => {

    res.sendFile(path.join(__dirname, '/index.html'));

})
app.use('/api', routes)

app.listen(process.env.PORT || 3100, () => {
    console.log(`Server Started at ${process.env.PORT}`)
})