const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const mongooseConnection = require('./config/mongooseConnection.config')

const app = express();

// ==> Bodyparser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: "application/vnd.api+json"}));

// ==> Morgan
app.use(morgan('dev'));

// ==> Cors
app.use(cors());

// ==> Mongoose Connection
app.set('Mongoose Connection', mongooseConnection);

// ==> Rotas da API:
const index = require('./routes/index');
app.use(index);

// ==> User Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/v1', userRoutes);

module.exports = app;