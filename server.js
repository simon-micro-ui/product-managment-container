//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/productmgt'));

app.get('/index.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/index-all-components.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/index-all-components.html'));
});

app.get('/index-product-view.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/index-product-view.html'));
});

app.get('/index-product-view-individual.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/index-product-view-individual.html'));
});

app.get('/index-product-header.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/index-product-header.html'));
});

app.get('/index-product-cart.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/index-product-cart.html'));
});

console.log("Starting server on port 8080.  See http://localhost:8080");

// Start the app by listening on the default Heroku
app.listen(process.env.PORT || 8080);
