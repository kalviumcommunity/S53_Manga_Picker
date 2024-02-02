const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

// Define the ping route
app.get('/ping', (req, res) => {
  res.send('pong');
});
app.get('/data', (req, res) => {
  res.send('data');
});
app.get('/', (req, res) => {
  res.send('kp is great');
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;