var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

// middleware

app.use(logger('dev'));
app.use(cookieParser);

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=> {
  console.log(req.cookie);
  next();
})


app.use('/about',(req,res,next) => {
  res.cookie("username", "suraj");
  res.end('About Page')
})


app.get('/', (req,res) => {
  res.sendFile(__dirname + "/index.html");
})


app.post('/json',(req,res) => {
  console.log(req.body)
})

app.post('/contact',(req,res) => {
  console.log(req.body)
})



app.listen(3000,()=> {
  console.log('server is listining on port 3k')
})
