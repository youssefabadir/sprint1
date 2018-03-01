var mongoose = require('mongoose'),
moment = require('moment'),
User = mongoose.model('User');
Validations = require('../utils/Validations')



module.exports.authenticateUser = function(req, res, next) {
    Product.find({username:req.body.username},function(err,users){
        console.log(users);
    }).exec(function(err, users) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg:'User was authenticated',
          
        data: users
      });

    });
  };