var express = require('express');
var app = express();

app.use(express.json());

app.post('/json',(req,res) => {
  console.log(req.body)
})

app.use(express.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/public'));

app.listen(3000,()=> {
  console.log('server is listining on port 3k')
})

