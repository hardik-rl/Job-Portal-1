const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async() => {
  try {
    const connect = await mongoose.connect('mongodb://localhost:27017/job-portal')
    console.log('Connected to database');

  }
  catch (err) {
    console.log(err);
    process.exit();
  }
}

module.exports = connectDb;