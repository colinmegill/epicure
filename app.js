var path = require("path");
var express = require("express");
var _ = require('lodash');

var app = express();

app.use(function(req, res, next) {
    res.setHeader("Cache-Control", "no-cache");
    return next();
});

app.use(express.static(__dirname + "/build"));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Recipe Book " + port)


