const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk')
const volleyball = require('volleyball')
app.use(volleyball) 

app.use('/special', function(req, res, next) {
    console.log(chalk.yellow(req.method, req.path, 'special page'))
    next()
})

app.get('/', function(req, res, next) {
    res.send('Welcome!')  
})

app.get('/special', function(req, res, next) {
    res.send('You are now on the special page')  
})



app.listen(3000, function() {
    console.log('listening on port 3000')
})