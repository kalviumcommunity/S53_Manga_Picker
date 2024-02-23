const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mangadata = require('./data/database');
const cors = require('cors')
const cookieParser = require('cookie-parser');
app.use(cors())
app.use(cookieParser());


const { ConnectToDB, stopDatabase, isConnected } = require('./db');

app.use(express.json());

// Define the ping route
app.get('/data', (req, res) => {
  res.send(mangadata);
});

const Router = require('./router/route')
app.use('/api', Router)
const Authrout = require('./router/Auth')
app.use('/auth',Authrout)

// Updated home route
app.get('/', async (req, res) => {
  const dbStatus = isConnected() ? 'connected' : 'disconnected';
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
