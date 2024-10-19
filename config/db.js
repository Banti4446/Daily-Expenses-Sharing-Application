const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbUri = process.env.DB_URI;
    await mongoose.connect(dbUri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
