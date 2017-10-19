var express = require('express');
var router = express.Router();
var user = require('../controllers/user')

/* GET users listing. */
router.get('/', user.getDataAll);

router.get('/:id', user.getSingleUser);

router.post('/', user.CreateUser);

router.delete('/:id', user.deleteUser);

router.put('/:id', user.updateUser);

module.exports = router;
