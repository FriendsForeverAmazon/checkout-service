const fs = require('fs');
const faker = require('faker');

const stream = fs.createWriteStream('./seed/fakeData.csv');

let i = 0;

const write = () => {
  while (i < 1e7) {
    const item = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(3, 10000, 2),
      stock: faker.random.number({ min: 0, max: 30 }),
      onList: faker.random.boolean(),
      rating: faker.random.number({ min: 0, max: 5 }),
      numOfRatings: faker.random.number({ min: 0, max: 1000 }),
      relatedItems: JSON.stringify([faker.random.number({ min: 1, max: 100 }),
        faker.random.number({ min: 1, max: 100 }), faker.random.number({ min: 1, max: 100 })]),
      imgUrl: faker.image.fashion(200, 200, true),
    };
    if (!stream.write(JSON.stringify(item) + (i++) + ', \n')) {
      return;
    }
  }
  stream.end();
};

stream.on('drain', () => {
  write();
});
write();
