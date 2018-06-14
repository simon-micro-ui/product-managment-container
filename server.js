//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/productmgt'));

app.get('/*', function(req,res) {
    console.log('__dirname:'+__dirname);
res.sendFile(path.join(__dirname+'/dist/productmgt/index.html'));
});
console.log("Starting server on port 8080.  See http://localhost:8080");

// Start the app by listening on the default Heroku
app.listen(process.env.PORT || 8080);
