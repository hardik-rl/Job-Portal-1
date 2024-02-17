const mongoose = require('mongoose');

const connectDb = async() => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to database');

  }
  catch (err) {
    console.log(err);
    process.exit();
  }
}

module.exports = connectDb;