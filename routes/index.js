var express = require('express');
var router = express.Router();
var login = require('../controllers/login')

/* GET home page. */
router.get('/',(req,res)=>{
  res.send('test')
});

router.post('/signin', login.getSingleUser);
router.post('/signup', login.getUser);

module.exports = router;
