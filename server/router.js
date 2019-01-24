const router = require('express').Router();
// const {
//   addToCart,
//   readFromCart,
//   deleteFromCart,
//   updateCart,
// } = require('./controllerMongoDB');
const {
  addToCart,
  readFromCart,
  deleteFromCart,
  updateCart,
} = require('./controllerPostgres');

// CREATE/UPDATE
router.post('/cart/:id', addToCart);
router.put('cart/:id', updateCart);

// READ
router.get('/cart/:id', readFromCart);

// DELETE
router.delete('/cart/:id', deleteFromCart);


module.exports = router;


// app.get('/cart', (req, res) => {
//   db.connection.query('SELECT items.item_id, name, price, rating, numOfRatings, imgUrl FROM items INNER JOIN cartItems ON items.item_id = cartItems.item_id', (err, results) => {
//     if (err) {
//       return res.send(err);
//     }
//     res.send(results);
//   });
// });

// app.get('/items/:id', (req, res) => {
//   db.connection.query(`SELECT * FROM items WHERE item_id = ${req.params.id}`, (err, results) => {
//     if (err) {
//       return res.send(err);
//     }
//     res.send(results);
//   });
// });
// // add a route to get just the review rating

// app.post('/cart/:id', (req, res) => {
//   db.connection.query(`INSERT INTO cartItems (item_id, quantity) values (${req.params.id}, ${req.body.quantity})`, (err) => {
//     if (err) {
//       return res.send(err);
//     }
//     res.send();
//   });
// });

// app.patch('/items/:id/list', (req, res) => {
//   db.connection.query(`UPDATE items SET onList = true WHERE item_id = ${req.params.id}`, (err) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       res.send('updated');
//     }
//   });
// });
