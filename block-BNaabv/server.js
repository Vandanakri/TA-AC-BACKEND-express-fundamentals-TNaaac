var express = require('express');
var logger = require('morgan');
var cookieParser = require(cookieParser);

var app = express();

app.use(logger('dev'))
app.use( cookieParser() );

app.use( ( req, res, next )=>{
    res.cookie( "count", 1 );
    next();
} );

//router to capture params from the request on a route `/users/:username`

app.get( '/user/:username', ( req, res )=>{
    var username = req.params.username;
    res.send(`<h1>${username}</h1>`);
} )

//Create a basic express server with 2 routes

app.get('/', (req,res) => {
  res.send('<h2>Hello Vandana Sah</h2>')
});

app.get('/about', (req,res) => {
  res.send('My name is qwerty')
});


// add POST request on `/form` route to capture form data

app.use( express.urlencoded( { extended : false  } ) );

app.post( '/form', ( req, res )=>{
    res.send( req.body );
} );

//add POST request on `/json` route to capture JSON data

app.use( express.json() );

app.post( '/json', ( req, res )=>{
    res.send( req.body );
} );

app.use( ( req, res, next ) => {
    res.status(404).send("<h1>Page not found on the server</h1>");
} );

app.use( ( req, res, next ) => {
    res.status(500).send("<h1>Client and Server error</h1>");
} );


app.listen(5000,() => {
  console.log('server is listening on port 5k')
})

