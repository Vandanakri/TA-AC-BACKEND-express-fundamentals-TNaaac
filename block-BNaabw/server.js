//require
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

//middleware
app.use( express.json() );
app.use( express.urlencoded( { extended : false  } ) );

app.use(logger('dev'))
app.use(cookieParser());

//routes

app.get('/', (req,res) => {
  res.send('Welcome to Express')
})

app.get('/users', (req,res) => {
  res.send('This is Assignment 2')
})

app.use(express.static(__dirname + '/assets'))

//err handle
app.use((err,req,res,next) => {
  res.send(err);
})


app.listen(4000,() => {
  console.log('server listening on port 4k')
})