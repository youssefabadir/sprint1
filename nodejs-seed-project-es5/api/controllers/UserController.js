var User = module.exports = mongoose.model('User', userSchema);

var mongoose = require('mongoose'),
moment = require('moment'),
Validations = require('../utils/Validations'),
User = mongoose.model('User');

module.exports.getUSerNameByID = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUSerNameByUsername = function(username, callback){
    var query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(req, res, next) {
    var valid = 
        req.body.name &&
        req.body.username &&
        req.body.password &&
        req.body.email;
    if(!valid) {
        return res.status(422).json({
            err: null,
            msg: 'name, username, password, email are required fields.',
            data: null 
        });
    }
}

/*module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUSer.password, salt, (err, hash) => {
            if(err) throw err;
            newUSer.password = hash;
            newUser.save(callback);
        });
    });
}
modules.exports.comparePassword = function(candidatePassword, callback) {
    compare(candidatePassword, password, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}*/