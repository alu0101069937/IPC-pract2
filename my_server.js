// importar
var express = require('express');

// instanciar
var app = express();

// ruteo
app.get('/', function(req, res){
res.sendfile(__dirname + '/public/mipagina.html');
});
app.get('/about', function(req, res){
res.sendfile(__dirname + '/public/mipagina.html');
});

// escuchar puerto 8080
app.listen(8080);

console.log("Servidor Express escuchando en modo %s", app.settings.env);

/*===FICHERO INICIAL DE PRUEBAS=====
//Indica que queremos trabajar con HTTP (tb se podría con “net”,”tcp”,”tls”)
var http = require("http"); 
var server = http.createServer(function (peticion, respuesta){
  respuesta.end("Hola Web.com");
});
//"respuesta.end()" sirve para terminar la petición y enviar los datos al cliente.
server.listen(8080, function(){
  console.log("tu servidor está listo en " + this.address().port);
});
// Ahora le decimos al servidor que se ponga en marcha.
*/
