const express = require('express')
const router = express.Router()
const model = require('../models')
const helper = require('../helper/jwt.js')
var salt = 'An4kny4C4nt1kB4p4kny4G4lak'





class Login {


  static getSingleUser(req,res){
    // res.send('test singel user')
    // router.post('/signin', login.getSingleUser);
    model.LoginUser.findAll({
      where: {
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      }
    })
    .then(dataLogin=>{
      if(dataLogin){
        ;
        // res.send(req.body.username)
      } else {
        console.log('Silahkan login')
        res.send('login failed')
      }


    })
    .catch(err=>{
      console.log(err);
    })
  }

}

module.exports = Login
