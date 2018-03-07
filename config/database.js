// 27017 is the default port number.
module.exports = {
    database: 'mongodb://localhost:27017/todoList'
}

// Connect mongoose to our database
const config = require('../config/database');
const mongoose = require('mongoose');
mongoose.connect(config.database);