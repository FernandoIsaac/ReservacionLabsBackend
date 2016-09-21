var SHA3 = require("crypto-js/sha3");
var boom = require('boom');
var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var SHA3 = require("crypto-js/sha3");
var client = new pg.Client(conString);
client.connect();

exports.createDocente = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function(request, reply) {
      console.log(request.payload);
      pg.connect(conString, function(err, client, done) {
          // Handle connection errors
          if(err) {
            done();
            console.log(err);
            return reply.status(500).json({ success: false, data: err});
          }
          client.query("INSERT INTO Docente VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,'docente')",[request.payload.email,String(SHA3(request.payload.password)), request.payload.primerNombre, request.payload.segundoNombre, request.payload.primerApellido, request.payload.segundoApellido, request.payload.campus, request.payload.departamento, request.payload.telefono]);

      });
      reply("Docente agregado")
    }
};
