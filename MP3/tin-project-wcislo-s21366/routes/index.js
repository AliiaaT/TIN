var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main'});
});

const langController = require('../controllers/langController');
router.get('/changeLang/:lang', langController.changeLang);

const AuthConstroller = require('../controllers/authController');
router.post('/login', AuthConstroller.login);
router.get('/logout', AuthConstroller.logout);

module.exports = router;
