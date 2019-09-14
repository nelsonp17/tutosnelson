var express = require('express');
var fs = require("fs");

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('assets'));
app.use(express.static('public'));

app.set("view engine", "jade");

app.get("/", function(req, res){
  res.render("index");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/users", function (req, res) {
  res.send("Hemos resivido tus datos");
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
