const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mangadata = require('../Backend/data/database');
const { startDatabase, stopDatabase, isConnected } = require('./db');


app.use(express.json());

// Define the ping route
app.get('/data', (req, res) => {
  res.send(mangadata);
});

const Router =require('./router/route')
app.use('/api',Router)



// Updated home route
app.get('/', async (req, res) => {
  const dbStatus = isConnected() ? 'connected' : 'disconnected';
  res.send({
    message: 'o_O',
    database: dbStatus,
  });
});

// process.on('SIGINT', async () => {
//   await stopDatabase();
//   process.exit(0);
// });

// process.on('SIGTERM', async () => {
//   await stopDatabase();
//   process.exit(0);
// });

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
