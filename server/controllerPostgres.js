const { Cart } = require('../dbPostgres/db.js');

// create
const addToCart = (req, res, next) => {
  Cart.create({
    user: req.body.user,
    productName: req.body.productName,
    quantity: req.body.quantity,
  })
    .then(() => {
      console.log('SUCCESS: added to cart');
      res.status(201);
      res.send('Added to cart');
    })
    .catch((err) => {
      console.log('FAILED: Reservation failed');
      res.status(500);
      res.send(err);
    });
};

// read
const readFromCart = (req, res, next) => {
  Cart.findAll()
    .then((cartData) => {
      console.log('SUCCESS: got all cart data');
      res.status(200);
      res.send(cartData);
    })
    .catch((err) => {
      console.log('FAILED: err getting all cart data');
      res.status(500);
      res.send(err);
    });
};

const readSingleCart = (req, res, next) => {
  Cart.findAll({
    where: {
      id: req.body.id,
    },
  })
    .then((cartData) => {
      console.log('SUCCESS: got all cart data');
      res.status(200);
      res.send(cartData);
    })
    .catch((err) => {
      console.log('FAILED: err getting all cart data');
      res.status(500);
      res.send(err);
    });
};

// delete
// remove cart by user
const deleteFromCart = (req, res, next) => {
  Cart.destroy({
    user: req.body.user,
  })
    .then(() => {
      console.log('SUCCESS: deleted from cart');
      res.status(201);
      res.send('Deleted from cart');
    })
    .catch((err) => {
      console.log('FAILED: err deleting');
      res.status(500);
      res.send(err);
    });
};

// update
const updateCart = (req, res, next) => {
  Cart.update({
    user: req.body.user,
    productName: req.body.productName,
    quantity: req.body.quantity,
  })
    .then(() => {
      console.log('SUCCESS: added to cart');
      res.status(201);
      res.send('Added to cart');
    })
    .catch((err) => {
      console.log('FAILED: Reservation failed');
      res.status(500);
      res.send(err);
    });
};

module.exports = {
  addToCart,
  readFromCart,
  readSingleCart,
  deleteFromCart,
  updateCart,
};
