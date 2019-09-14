/*
    cambiar una variable a una vista en node js puro
*/

var http = require("http"),
    fs = require("fs");
  http.createServer(function(req, res){
    fs.readFile("variable.html", function(err, html){
      var html_string = html.toString();
      var nombre = "Nelson Portillo";
      var variables = html_string.match(/[^\{\{\}\}]+(?=\}\})/g);

      for (var i = variables.length - 1; i >= 0; i--) {
        var value = eval(variables[i]);
        html_string = html_string.replace("{{" + variables + "}}", value)
      }
      res.writeHeader(200, {"Content-Type": "text/html"})
      res.write(html_string);
      res.end();
    });
  }).listen("8080");
