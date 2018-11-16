const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.SERVER_PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.json({hi: 'hello'});
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});