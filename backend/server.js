var hapi = require('hapi');
var inert = require('inert');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');

var server = new hapi.Server();
server.connection({
    port: ~~process.env.PORT || 8000,
    routes: { cors: {
                    credentials: true,
                    origin: ["*"]
                }
              }
});


var pg = require("pg");

var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";

var client = new pg.Client(conString);
client.connect();
//client.query("CREATE TABLE Docente ( email char(20), password char(20), primerNombre char(30), segundoNombre char(30), primerApellido char(30), segundoApellido char(30), campus char(30), departamento char(30), telefono char(20), scope char(20), PRIMARY KEY (email))");
//client.query("CREATE TABLE Laboratorio ( id_Laboratorio char(15), nombre char(20), desripcion char(30), ubicacion char(20), capacidad numeric(9,0), PRIMARY KEY (id_Laboratorio))");
//client.query("CREATE TABLE Reservacion ( id_Reservacion char(15), descripcion char(30), estado char(20), fecha_inicial date, fecha_final date, hora_inicial time(7), hora_final time(7), email_Docente char(20) REFERENCES Docente(email), id_Laboratorio char(15) REFERENCES Laboratorio(id_Laboratorio), PRIMARY KEY (id_Reservacion))");
//client.query("CREATE TABLE Recurso ( id_Recurso char(15), nombre char(20), descripcion char(30), PRIMARY KEY (id_Recurso))");
//client.query("CREATE TABLE Recursos_de_Laboratorio ( id_Laboratorio char(15) REFERENCES Laboratorio(id_Laboratorio), id_Recurso char(15) REFERENCES Recurso(id_Recurso))");

server.register([inert, auth], function(err){

  server.auth.strategy('session', 'cookie', {
    password: 'secretpasswordforencryption',
    cookie: 'angular-scaffold-cookie',
    ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
    isSecure: false
  });

	server.route(routes.endpoints);

	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
