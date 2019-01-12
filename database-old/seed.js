const faker = require('faker');
const mysql = require('mysql');
const mysqlconfig = require('./config.js');

module.exports.connection = mysql.createConnection(mysqlconfig);

module.exports.connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    for (let i = 0; i < 100; i += 1) {
      const name = faker.commerce.productName();
      const price = faker.commerce.price(3, 10000, 2);
      const stock = faker.random.number({ min: 0, max: 30 });
      const onList = faker.random.boolean();
      const rating = faker.random.number({ min: 0, max: 5 });
      const numOfRatings = faker.random.number({ min: 0, max: 1000 });
      const relatedItems = JSON.stringify([faker.random.number({ min: 1, max: 100 }),
        faker.random.number({ min: 1, max: 100 }), faker.random.number({ min: 1, max: 100 })]);
      const imgUrl = faker.image.fashion(200, 200, true);
    
      module.exports.connection.query(`INSERT INTO items (name, price, stock, onList, rating, numOfRatings, relatedItems, imgUrl) values ('${name}', ${price}, ${stock}, ${onList}, ${rating}, ${numOfRatings}, '${relatedItems}', '${imgUrl}')`, (err) => {
        if (err) {
          console.error(err);
        } else if (i === 99) {
          console.log('seeded 100 items');
        }
      });
    }
  }
});
