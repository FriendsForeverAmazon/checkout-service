const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1128');

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  onList: Boolean,
  rating: Number,
  numOfRatings: Number,
  imgUrl: String,
});

const cartSchema = new mongoose.Schema({
  user: Number,
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
});

const Product = mongoose.model('Product', itemSchema);
const Cart = mongoose.model('Cart', cartSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('SUCCESS: Connected to mongodb');
});


module.exports = {
  Product,
  Cart,
};
