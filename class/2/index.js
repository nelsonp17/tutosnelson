var http = require("http"),
    fs = require("fs");


  http.createServer(function(req, res){
    if (req.url.indexOf("favicon.ico") > 0 ) {
      return;
    }
    //   /?nombre=Nelson
    fs.readFile("index.html", function(err, html){
      var html_string = html.toString();
      var variables = html_string.match(/[^\{\{\}\}]+(?=\}\})/g);
      if (req.url.indexOf("?") > 0) {
        var data_param = req.url.split("?");
        var parametros = {};
        // data_param = ["?", "nombre=Nelson"];
        var data = data_param[1].split("&");
        // console.log(data);
        for (var i = data.length - 1; i >= 0; i--) {
          // console.log(data[i]);
          var param_data = data[i].split("=");
          parametros[param_data[0]] = param_data[1];
        }
      }
      for (var i = variables.length - 1; i >= 0; i--) {
        html_string = html_string.replace("{{" + variables + "}}", parametros[variables[i]])
      }
      res.writeHeader(200, {"Content-Type": "text/html"})
      res.write(html_string);
      res.end();
    });
  }).listen("8080");
