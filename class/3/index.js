var http = require("http"),
    fs = require("fs"),
    parser = require('./parse.js');

  http.createServer(function(req, res){

    fs.readFile("index.html", function(err, html){
      var html_string = html.toString();
      var variables = html_string.match(/[^\{\{\}\}]+(?=\}\})/g);
      var nombre = "";

      var parametros = parser.parse(req);
      console.log(parametros);

      if (parametros != false) {
        for (var i = variables.length - 1; i >= 0; i--) {
          html_string = html_string.replace("{{" + variables + "}}", parametros[variables[i]])
        }
      }else{
        for (var i = variables.length - 1; i >= 0; i--) {
          var value = eval(variables[i]);
          html_string = html_string.replace("{{" + variables + "}}", value);
        }
      }

      res.writeHeader(200, {"Content-Type": "text/html"})
      res.write(html_string);
      res.end();
    });
  }).listen("8080");
