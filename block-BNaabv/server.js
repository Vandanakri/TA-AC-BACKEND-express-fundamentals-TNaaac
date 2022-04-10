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

app.use( ( req, res, next )=>{
    res.cookie( "username", "Vana" );
    next();
});



//routes

//Create a basic express server with 2 routes

app.get('/', (req,res) => {
  res.send('<h2>Hello Vandana Sah</h2>')
});

app.get('/about', (req,res) => {
  res.send('My name is qwerty')
});


// add POST request on `/form` route to capture form data


app.post( '/form', ( req, res )=>{
    res.json( req.body );
} );

//add POST request on `/json` route to capture JSON data


app.post( '/json', ( req, res )=>{
    res.json( req.body );
} );

//router to capture params from the request on a route `/users/:username`

app.get( '/user/:username', ( req, res )=>{
  var username = req.params.username;
  res.send(`<h1>${username}</h1>`);
} )

//404 middlewares

app.use( ( req, res, next ) => {
    res.send("Page not found on the server");
});

//custom middlewares
app.use( (err,req,res,next ) => {
    res.send("Client and Server error");
});


app.listen(3000,() => {
  console.log('server is listening on port 3k')
})

