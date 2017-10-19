const express = require('express')
const router = express.Router()
const model = require('../models')


class User {

  static getDataAll(req,res){
    // res.send('test all')
    model.DataUser.findAll()
    .then(dataUser=>{
      res.send(dataUser)
    })
    .catch(err=>{
      res.send(err)
    })

  }

  static getSingleUser(req,res){
    // res.send('test singel user')
    //router.get('/:id', user.getSingleUser);
    model.DataUser.findAll({
      where: {id:`${req.params.id}`}
    })
    .then(dataUser=>{
      res.send(dataUser)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static CreateUser(req,res){
    // res.send('Create user')
    // router.post('/', user.CreateUser);
    model.DataUser.build({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address
    })
    .save().then((dataUser)=>{
      res.send(dataUser)
    })
    .catch((err)=>{
      res.send(err)
    })

  }

  static deleteUser(req,res){
    // res.send('delete user')
    // router.delete('/:id', user.deleteUser);
    model.DataUser.destroy({
      where: {id:req.params.id}
    })
    .then((dataUser)=>{
      res.redirect('/users')
    })
    .catch((err)=>{
      res.send(err)
    })
  }

  static updateUser(req,res){
    // res.send('update user')
    // router.put('/:id', user.updateUser);
    model.DataUser.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address
    },
    {
      where: {id: `${req.params.id}`}
    })
    .then(dataUser=>{
      res.redirect('/users')
    })
    .catch((err)=>{
      res.send(err)
    })
  }


}

module.exports = User
