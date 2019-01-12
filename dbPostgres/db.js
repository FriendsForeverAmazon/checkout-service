const Sequelize = require('sequelize');

const connection = new Sequelize('checkout', 'student', 'student', {
  host: 'localhost',
  dialect: 'postgres',
});

connection.authenticate()
  .then(() => console.log('Connected to products database'))
  .catch(err => console.error(err));

// ---------------------------------------------------------------
//                           M o d e l
// ---------------------------------------------------------------
const Products = connection.define('products', {
  itemId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  stock: Sequelize.INTEGER,
  onList: Sequelize.BOOLEAN,
  rating: Sequelize.INTEGER,
  numOfRatings: Sequelize.INTEGER,
  imgUrl: Sequelize.STRING,
});

const Cart = connection.define('cart', {
  user: Sequelize.INTEGER,
  productName: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
});


// Reservations.belongsTo(Products);
Cart.sync(
  // {force: true}
);

Products.sync(
  // {force: true}
);


module.exports = {
  Cart,
  Products,
};
