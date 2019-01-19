const fs = require('fs');
const faker = require('faker');

const streamCarts = fs.createWriteStream('./seed/fakeCarts.tsv');

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

// generate 10M cart records amongst 100,000 users
let i = 1;
const entryCount = 1e7;

const writeCarts = () => {
  let result = true;

  while (i <= entryCount && result) {
    const item = [
      i,
      faker.random.number({ min: 0, max: (1e5) }),
      faker.random.number({ min: 1, max: (1e7) }),
      faker.random.number({ min: 0, max: 30 }),
    ];
    result = streamCarts.write(createRecord(item));
    i += 1;

    // log every M records (dev purposes)
    if (i % 1000000 === 0) {
      console.log('Writing carts...', i);
    }
  }

  if (i < entryCount) {
    streamCarts.once('drain', writeCarts);
  } else if (i === entryCount) {
    streamCarts.end();
  }
};

writeCarts();
