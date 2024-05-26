const mongoose = require('mongoose');
require ('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

module.exports = mongoose;
