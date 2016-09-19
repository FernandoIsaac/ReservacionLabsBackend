var docente = require('../schemas/docente');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createDocente = {
    auth: {
      mode:'try',
      strategy:'session'
    },
    handler: function(request, reply) {
      console.log(request.payload);
       var newDocente = new docente({
         email: request.payload.email,
         password: SHA3(request.payload.password),
         primerNombre: request.payload.primerNombre,
         segundoNombre: request.payload.segundoNombre,
         primerApellido: request.payload.primerApellido,
         segundoApellido: request.payload.segundoApellido,
         campus: request.payload.campus,
         departamento: request.payload.departamento,
         telefono: request.payload.telefono,
         scope : request.payload.scope
       });
       newDocente.save(function (err) {
         console.log(err);
         if(err){
          return reply(boom.notAcceptable('Email must be unique: ' + err));
         }else{
           return reply('ok');
         };
      });
    }
  };
