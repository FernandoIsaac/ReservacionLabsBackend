var joi = require('joi');
var boom = require('boom');
var SHA3 = require("crypto-js/sha3");
var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);
client.connect();

exports.login = {
    auth: false,
    validate: {
      payload: {
        email: joi.string().required(),
        password: joi.string().min(2).max(200).required()
      }
    },
    handler: function(request, reply) {
      var docente = [];

      pg.connect(conString, function(err, client, done) {
          if(err) {
            done();
            console.log(err);
            return reply.status(500).json({ success: false, data: err});
          }
            var password = String(SHA3(request.payload.password))
            var query = client.query("SELECT email, scope FROM Docente Where email = ($1) AND password = ($2) ",[request.payload.email,password]);

          query.on('row', function(row) {
              docente.push(row);
          });

          query.on('end', function() {
              done();
              console.log(docente)
              if(!err){
                if(docente.length > 0){
                  request.cookieAuth.set(docente[0]);
                  return reply({email: docente[0].email, scope: docente[0].scope});
                }
                return reply(boom.unauthorized('Wrong email or password'));
              }
          });

      });
    }
};
exports.logout = {
    auth: {
      mode:'required',
      strategy:'session'
    },
    handler: function(request, reply) {
      request.cookieAuth.clear();
      return reply('Logout Successful!');
    }
  };
