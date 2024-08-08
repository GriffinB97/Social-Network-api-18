const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api');  // Pointing directly to the index.js in routes/api

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);  // Use the routes from the routes/api/index.js

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
