//Indica que queremos trabajar con HTTP (tb se podría con “net”,”tcp”,”tls”)
var http = require("http"); 
var server = http.createServer(function (peticion, respuesta){
  respuesta.end("Hola Web.com");
});
//"respuesta.end()" sirve para terminar la petición y enviar los datos al cliente.
server.listen(3000, function(){
  console.log("tu servidor está listo en " + this.address().port);
});
// Ahora le decimos al servidor que se ponga en marcha.
