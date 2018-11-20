require('dotenv').config();
const express = require('express');
const cors = require('cors');

const Database = require('./database/index');

(async () => {
    const connection = await Database.connection();
    console.log(connection);
})()

const app = express();

const PORT = process.env.SERVER_PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.json({hi: 'hello'});
});

app.get('/ping', (req, res) => {
    res.json({ ping: 'pong'})
})

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});