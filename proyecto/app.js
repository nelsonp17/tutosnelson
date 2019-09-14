var express = require('express');
var fs = require("fs");

var app = express();

// middleware -> archivos estacticos que no se van a compilar dentro del servidor public, assets
app.use(express.static('assets'));
app.use(express.static('public')); // midominio.com/file
// app.use("public", express.static('public')); // midominio.com/public/file

app.set("view engine", "jade");

app.get("/", function(req, res){
  res.render("index");
});

app.get("/login", function (req, res) {
  res.render("login");
})

// app.get("/assets/:dir/:file", function (req, res) {
// 	var dir = req.params.dir;
// 	var file = req.params.file;
// 	fs.readFile(`./assets/${dir}/${file}`, function(err, file){
//       res.write(file);
//       res.end();
//     });
// })



app.listen(8080);
