const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/school')
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB;