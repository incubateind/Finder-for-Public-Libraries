const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = require('../models/users.js')
const moongoose = require('mongoose')
const db = "mongodb://localhost/devhackdb"

mongoose.connect(db,err =>{
    if(err){
        console.error('Error! '+err)
    }
    else{
        console.log('Connected to mongodb')
    }
})

router.get('/', (req,res) => {
    res.send('From API route')
})

router.post('/sign-up', (req,res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((err,registeredUser) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req,res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err,user) => {
        if(err){
            console.log(err);
        }
        else{
            if(!user){
                res.status(401).send('Invalid Email')
            }
            else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid Password')
                }
                else{
                    res.status(200).send(user)
                }
            }
        }
    })
})

module.exports = router