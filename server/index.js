require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
// const db = require('../dbMongodb/db.js');
const db = require('../dbPostgres/db.js');

const app = express();


// Middleware
app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Routes
app.use('/', router);

// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({ error: 'Not Found' });
});

module.exports = app;
