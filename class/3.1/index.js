var http = require("http"),
    fs = require("fs"),
    parser = require('./parse.js'),
    view_p = require('./view_parse.js');

  http.createServer(function(req, res){

    fs.readFile("index.html", function(err, html){
      var html_string = html.toString();

      var parametros = parser.parse(req);
      console.log(parametros);

      var view = view_p.view_parse(parametros, html_string);

      res.writeHeader(200, {"Content-Type": "text/html"})
      res.write(view);
      res.end();
    });
  }).listen("8080");
