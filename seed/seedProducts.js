const fs = require('fs');
const faker = require('faker');

const streamProducts = fs.createWriteStream('./seed/fakeProducts.tsv');

// write fake record
const createRecord = (item) => {
  let output = '';
  item.forEach((data, index) => {
    if (index < item.length - 1) {
      output += `${data}\t`;
    } else {
      output += `${data}\n`;
    }
  });
  return output;
};

// generate entryCount sized .tsv mock data
let i = 1;
const entryCount = 1e7;

const writeProducts = () => {
  let result = true;

  while (i <= entryCount && result) {
    const item = [
      i,
      faker.commerce.productName(),
      Number(faker.commerce.price(3, 10000, 2)),
      faker.random.number({ min: 0, max: 30 }),
      faker.random.boolean(),
      faker.random.number({ min: 0, max: 5 }),
      faker.random.number({ min: 0, max: 1000 }),
      faker.image.fashion(200, 200, true),
    ];
    result = streamProducts.write(createRecord(item));
    i += 1;

    // log every M records (dev purposes)
    if (i % 1000000 === 0) {
      console.log('Writing products...', i);
    }
  }

  if (i < entryCount) {
    streamProducts.once('drain', writeProducts);
  } else if (i === entryCount) {
    streamProducts.end();
  }
};

writeProducts();
