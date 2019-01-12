const { Cart } = require('../dbMongodb/db.js');

// create
const addToCart = (req, res, next) => {
  const newCart = new Cart({
    user: req.body.user,
    productName: req.body.productName,
    quantity: req.body.quantity,
  });
  newCart.save()
    .then(() => {
      if (newCart.isNew === false) {
        console.log('SUCCESS: saved to db');
        res.send();
      }
    })
    .catch((err) => {
      console.log('FAIL: err saving', err);
    });
};

// read
const readFromCart = (req, res, next) => {
  Cart.find({ user: req.params.id })
    .then((cartData) => {
      console.log('SUCCESS: received cart data', cartData);
      res.send(cartData);
    })
    .catch((err) => {
      console.log('FAIL: err saving', err);
    });
};

// delete
// remove cart by user
const deleteFromCart = (req, res, next) => {
  Cart.deleteOne({ user: req.params.id })
    .then((cartData) => {
      console.log('SUCCESS: deleted cart data', cartData);
      res.send(cartData);
    })
    .catch((err) => {
      console.log('FAIL: err saving', err);
    });
};

// update
const updateCart = (req, res, next) => {
  const newCart = new Cart({
    user: req.body.user,
    productName: req.body.productName,
    quantity: req.body.quantity,
  });
  newCart.findOneAndUpdate()
    .then(() => {
      if (newCart.isNew === false) {
        console.log('SUCCESS: saved to db');
        res.send();
      }
    })
    .catch((err) => {
      console.log('FAIL: err saving', err);
    });
};

module.exports = {
  addToCart,
  readFromCart,
  deleteFromCart,
  updateCart,
};
