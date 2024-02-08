const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mangadata = require('../Backend/data/database');

const { ConnectToDB, stopDatabase, isConnected } = require('./db');


app.use(express.json());

// Define the ping route
app.get('/data', (req, res) => {
  res.send(mangadata);
});

const Router =require('./router/route')
app.use('/api',Router)



// Updated home route
app.get('/', async (req, res) => {
  const dbStatus = isConnected() ? 'disconnected' :'connected' ;
  res.send({
    message: 'o_O',
    database: dbStatus,
  });
});



if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port} http://localhost:${port}/`);
    ConnectToDB()
  });
}

module.exports = app;
