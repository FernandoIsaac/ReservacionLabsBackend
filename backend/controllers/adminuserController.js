var docente = require('../schemas/docente');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');
var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);
client.connect();

exports.createDocente = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function(request, reply) {
      console.log(request.payload);
      client.query("INSERT INTO Docente VALUES(request.payload.email, SHA3(request.payload.password), request.payload.primerNombre, request.payload.segundoNombre, request.payload.primerApellido, payload.segundoApellido, request.payload.campus, request.payload.departamento, request.payload.telefono, request.payload.scope)");
    }
  };
