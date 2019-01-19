const Sequelize = require('sequelize');

const connection = new Sequelize('checkout', 'student', 'student', {
  host: 'localhost',
  dialect: 'postgres',
});

connection.authenticate()
  .then(() => console.log('Connected to products database'))
  .catch(err => console.error(err));

module.exports = connection;

// ---------------------------------------------------------------
//                           M o d e l
// ---------------------------------------------------------------

const { Products, Cart } = require('./model');



// module.exports = {
//   Products,
//   Cart,
// };
