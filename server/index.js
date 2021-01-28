require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const Database = require('./database/index');
const morgan = require('morgan');
const schema = require('./graphql/index');

console.log(process.env)
Database.connection()
    .then( () => {
        console.log(`Database connected!`);
        Database.initTables();
    })
    .catch(err =>  {
        console.log(`Database connection error: ${err}`);
        process.exit(1);
    });

const app = express();

const PORT = process.env.SERVER_PORT || 3001;

app.use(morgan());

app.use('/graphql',
    cors(),
    bodyParser.json(),
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

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