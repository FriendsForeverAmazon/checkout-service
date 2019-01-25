require('newrelic');
const express = require('express');

const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
// const db = require('../dbMongodb/db.js');
const db = require('../dbPostgres/db.js');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// app.get('/', (req, res) => {
//   console.log('asdf', req);
//   // db.connection.query('SELECT items.item_id, name, price, rating, numOfRatings, imgUrl FROM items INNER JOIN cartItems ON items.item_id = cartItems.item_id', (err, results) => {
//   //   if (err) {
//   //     return res.send(err);
//   //   }
//   //   res.send(results);
//   // });
// });

app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));

// Routes
app.use('/', router);

// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({ error: 'Not Found' });
});

module.exports = app;
