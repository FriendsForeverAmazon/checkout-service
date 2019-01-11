const app = require('./index.js');

const port = 1337;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`${port} we hear you!`);
  }
});
