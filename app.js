// public modules
var express    = require('express');
var path       = require('path');
var multer     = require('multer');
var fs         = require('fs');

var routePath  = "./app/routes/";

var app        = express();

// Added to allow cross-domain request from the UI
app.use(function(req,res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Origin, X-Requested-With, Content-Type, Accept');
    return next();
});

fs.readdirSync(routePath).forEach(function(file) {
    var route=routePath+file;
    require(route)(app);
});

var port = process.env.PORT || 8088;    // set our port

module.exports = app;

app.listen(port);
console.log('Magic happens on port ' + port);