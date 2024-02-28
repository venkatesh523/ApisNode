require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://tvenkateshwarlu39:09912979054@cluster0.2n0dyv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoString = uri //process.env.DATABASE_URL;



mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());

const routes = require('./routes/index.routes');
app.use('/api', routes);

app.listen(3000, () => {
    console.log(`server started at ${3000}`)
})

