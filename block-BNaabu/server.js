var express = require('express');
var logger = require('morgan');
var cookieParse = require('cookie-parser');

var app = express();

app.get('/', (req,res) => {
  res.send('Hello Vandana Sah')
});

app.get('/about', (req,res) => {
  res.send('Hello Ashwini, How are you')
});

app.use('/admin', (req,res,next) => {
  next('Unauthorized');
})

app.use((err,req,res,next) => {
  console.log(err);
  res.send(err);
})

app.listen(5000,() => {
  console.log('server is listening on port 5k')
})



