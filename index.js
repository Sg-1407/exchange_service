const express = require('express');
const sequelize = require('./config/database'); // Database configuration
const exchangeRequests = require('./routes/exchangeRequests');

const app = express();
app.use(express.json());

app.use('/api/exchange-requests', exchangeRequests);

const PORT = process.env.PORT || 3003;

// Sync Sequelize models and start the server
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Database sync failed:', err));
