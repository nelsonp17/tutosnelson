function view_parse(parametros, html_string) {
  var nombre = "";
  var variables = html_string.match(/[^\{\{\}\}]+(?=\}\})/g);
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
  return html_string;
}
module.exports.view_parse = view_parse;
