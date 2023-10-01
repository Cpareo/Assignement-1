//Assignment 1, Timothy Li, 301201910, 2023/10/01

var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.sendStatus(200)
})

router.get('/homePage', function (req, res) {
    res.render(__dirname+'/../views/index')
})

router.get('/aboutMe', function (req, res) {
    res.render(__dirname+'/../views/pages/aboutMe')
})

router.get('/services', function (req, res) {
    res.render(__dirname+'/../views/pages/services')
})

router.get('/projects', function (req, res) {
    res.render(__dirname+'/../views/pages/projects')
})

router.get('/contact', function (req, res) {
    res.render(__dirname+'/../views/pages/contact')
})

module.exports = router