var recurso = require('../schemas/recurso');
var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);

exports.listRecurso = {
  handler: function(request, reply){
    var recursos = recurso.find({});
    reply(recursos);
}
}

exports.getRecurso = {
  handler: function(request, reply){
    var recurso = recurso.find({_id:request.params.recursoId});
    reply(recurso);
    console.log('get Recurso success')
  }
}

exports.addRecurso = {
  handler: function(request, reply){
    console.log("Entra aqui a addRecurso");
    client.query("INSERT INTO Recurso VALUES(request.payload.id_Recurso, request.payload.nombre, request.payload.descripcion)");
    reply("Recurso agregado")
  }
}

exports.editRecurso = {
  handler: function(request, reply){
    recurso.update({_id : request.params.recursoId},
      {id_Recurso: {type: String, unique: true, required: true},
      nombre: String,
      descripcion: String,
      recursos:[String],}).exec();
      reply("Recurso edited")
}}

exports.removeRecurso = {
  handler: function(request, reply){
    recurso.find({_id: request.params.recursoId}).remove().exec();
    reply("Recurso removed");
}}
