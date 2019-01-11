const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const items = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  onList: Boolean,
  rating: Number,
  numOfRatings: Number,
  relatedItems: {},
  imgUrl: String,
});