const Sequelize = require('sequelize');

const connection = new Sequelize('checkout', 'power_user', 'student', {
  host: '18.223.122.217',
  dialect: 'postgres',
});

connection.authenticate()
  .then(() => console.log('Connected to products database'))
  .catch(err => console.error(err));

// module.exports = connection;


// ---------------------------------------------------------------
//                           M o d e l
// ---------------------------------------------------------------

const Products = connection.define('products', {
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  stock: Sequelize.INTEGER,
  onList: Sequelize.BOOLEAN,
  rating: Sequelize.INTEGER,
  numOfRatings: Sequelize.INTEGER,
  imgUrl: Sequelize.STRING,
}, { timestamps: false });

// Products.sync(
//   // { force: true },
// )
  // .then(() => {
const Cart = connection.define('carts', {
  user: Sequelize.INTEGER,
  productID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'products',
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  quantity: Sequelize.INTEGER,
}, { timestamps: false });
    // Cart.sync(
    //   // { force: true },
    // );
  // }
  // );

connection.sync()
  .then(() => {
    console.log('sync success');
  });

module.exports = {
  Products,
  Cart,
};
