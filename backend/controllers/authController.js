var joi = require('joi');
var boom = require('boom');
var docente = require('../schemas/docente');
var SHA3 = require("crypto-js/sha3");

exports.login = {
    auth: false,
    validate: {
      payload: {
        email: joi.string().required(),
        password: joi.string().min(2).max(200).required()
      }
    },
    handler: function(request, reply) {
      var password = String(SHA3(request.payload.password));
      user.find({email: request.payload.email, password: password}, function(err, docente){

          if(!err){
            if(user.length > 0){
              request.cookieAuth.set(docente[0]);
              return reply({email: docente[0].email, scope: docente[0].scope});
            }
            return reply(boom.unauthorized('Wrong email or password'));
          }
          return reply(boom.notAcceptable('Error Executing Query'));
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
