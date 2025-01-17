const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const colors = require("colors");
const cors = require('cors');
const schema = require('./schema/schema.js');
const connsctDB = require('./config/db.js');
const port = process.env.PORT || 5000;


const app = express();

connsctDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`));
