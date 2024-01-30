const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use 3000 as a default port if PORT is not set in the environment

// Define the ping route
app.get('/ping', (req, res) => {
  res.send('pong');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;