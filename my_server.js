// importar
var express = require('express');

// instanciar
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
// ruteo
app.get('/', function(req, res){
res.sendfile(__dirname + '/public/mipagina.html');
});
app.get('/', function(req, res){
res.sendfile(__dirname + '/public/css/estilo.css');
});

// escuchar puerto 8080
app.listen(8080);

console.log("Servidor Express escuchando en modo %s", app.settings.env);

/*===FICHERO INICIAL DE PRUEBAS=====
var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
==============
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
