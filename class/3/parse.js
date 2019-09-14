function parse(req) {

  if (req.url.indexOf("?") > 0) {
    if (req.url.indexOf("favicon.ico") > 0 ) {
      return;
    }
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
  }else{
    return false;
  }

  return parametros;
}
module.exports.parse = parse;
