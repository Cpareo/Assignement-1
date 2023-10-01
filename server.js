//Assignment 1, Timothy Li, 301201910, 2023/10/01

// Requires
var express = require('express')

// Express
var app = express()

app.set('view engine', 'ejs')

// Static Files
app.use(express.static(__dirname + '/public'))

// Routes Module
app.use('/routes', require('./routes'))

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index')
})

const port = process.env.PORT || 3000

// Server Listening
app.listen(port, () => console.log('Server started at port: ' + port))
