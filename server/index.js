require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const Database = require('./database/index');

Database.connection()
    .then( () => {
        console.log(`Database connected!`)
    })
    .catch(err =>  {
        console.log(`Database connection error: ${err}`);
        process.exit(1);
    });

const app = express();

const PORT = process.env.SERVER_PORT || 3001;

// app.use('/graphql',
//     cors(),
//     bodyParser.json(),
//     expressGraphQL({
//         schema,
//         graphiql: true
//     })
// );

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