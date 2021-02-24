require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Database = require('./database/index');
const schema = require('./graphql/index');

const Authentication = require('./utils/authentication');

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

require('./routes')(app);

//TODO: move this into routes folder
app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

//TODO: graphql schema or it's own endpoint?
app.post('/v1/account/create', async (req, res) => {
    const { username, email, password } = req.body;

    // do stuff
    try{
        const { token } = await Authentication.signToken({ username, email });
        
        res.status(201).json({ token })
    }
    catch(error){
        res.status(400).json({message: 'Failed to authenticate'})
    }
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});