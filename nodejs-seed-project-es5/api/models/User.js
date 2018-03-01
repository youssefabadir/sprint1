var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../config/DBConnection');

//user schema
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema);
