var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');

  passport = require('passport');
  jwt = require('jsonwebtoken');
  config = require('../config/Config');
  User = require('../models/user');


//-------------------------------Product Routes-----------------------------------

router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);

//-------------------------------User Router----------------------------------------

//REGISTER
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg:'Failed to register usre'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

//AUTHENTICATION
router.post('/authenticate', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        var token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 //1 week
        });
        res.json ({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong Password'});
      }
    })
  }); 
});

//PROFILE
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});

});

module.exports = router;
