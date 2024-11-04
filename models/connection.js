const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://simsim:LkbU9Q5Ri4T5RYq3@cluster0.we9s2.mongodb.net/Tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));