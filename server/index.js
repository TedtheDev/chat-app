require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const Database = require('./database/index');
const schema = require('./graphql/index');

// Database.connection()
//     .then( () => {
//         console.log(`Database connected!`);
//         Database.initTables();
//     })
//     .catch(err =>  {
//         console.log(`Database connection error: ${err}`);
//         process.exit(1);
//     });

const app = express();

const PORT = process.env.SERVER_PORT || 3001;

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(morgan());
app.use(bodyParser.json());

app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.post('/v1/authenticate/create', (req, res) => {
    const { body = {} } = req;
    const { email, password } = body;

    if(email === 'myemail@email.com' && password === 'mypass'){
        // userId
        jwt.sign({ email }, process.env.TOKEN_SECRET, function(error, token) {
            if(error){
                res.status(401).json({
                    error,
                    message: 'Unable to sign token',
                })
            }

            res.status(201).json({
                token,
            })
        });
    } else {
        res.status(401).json({
            message: 'Invalid Credentials'
        })
    }
});

app.post('/v1/authenticate/verify', (req, res) => {
    const { body = {} } = req;
    const { token } = body;

    if(token){
        // userId
        jwt.verify(token, process.env.TOKEN_SECRET, function(error, decodedToken) {
            if(error){
                res.status(401).json({
                    error,
                    message: 'Unable to verify token',
                })
            }

            res.status(200).json(decodedToken)
        });
    } else {
        res.status(401).json({
            message: 'Invalid Token'
        })
    }
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});