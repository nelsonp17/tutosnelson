var express = require('express');

var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
  // res.send("Hola mundo");
  res.render("index", {titulo: "Mi primera pagina", name: "Nelson Portillo"});
});
app.get("/formulario", function (req, res) {
  res.render("formulario", {title: "Formulario POST"});

})
app.get("/welcome/:name", function (req, res) {
  res.render("welcome", {title: "Formulario POST", name: req.params.name });

})
app.post("/formulario", function (req, res) {
  res.render("send_formulario", {title: "Formulario enviado", name: "Nelson Portillo"});
})
app.get("/*", function (req, res) {
  console.log('error');
  res.end();
})
app.listen(8080);
