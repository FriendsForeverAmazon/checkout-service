const Sequelize = require('sequelize');
const connection = require('./db');

const Products = connection.define('products', {
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  stock: Sequelize.INTEGER,
  onList: Sequelize.BOOLEAN,
  rating: Sequelize.INTEGER,
  numOfRatings: Sequelize.INTEGER,
  imgUrl: Sequelize.STRING,
}, { timestamps: false });

Products.sync(
  // { force: true },
)
  .then(() => {
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
    Cart.sync(
      // { force: true },
    );
    module.exports = {
      Products,
      Cart,
    };
  });
