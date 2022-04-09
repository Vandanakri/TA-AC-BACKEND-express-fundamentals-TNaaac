var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

// middleware


app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

//routes

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get('/new', (req,res) => {
  res.sendFile(__dirname + "/new.html");
})

app.post('/new', (req,res) => {
  res.json(req.body)
})

app.get('/users/:username',(req,res) => {
  var username = req.params.username;
  res.send(username);
})


app.listen(5000,()=> {
  console.log('server is listining on port 5k')
})
