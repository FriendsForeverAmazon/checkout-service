// Craft your queries to use records that are within the last 10% of your dataset.
// 50ms is the upper limit. Most queries for this project should be optimizable to around 10ms or less.
const faker = require('faker');
const {
  addToCart,
  readFromCart,
  readSingleCart,
  deleteFromCart,
  updateCart,
} = require('../server/controllerPostgres');

const rand10Perc = faker.random.number({ min: 9000000, max: 10000000 });

for (let i = 0; i < 10; i++) {
  let req = {
    body: {
      id: rand10Perc,
    },
  };
  readSingleCart(req);
}
