var docente = require('../schemas/docente');
var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);

exports.listDocentes = {
  handler: function(request, reply){
    var docentes = vetr.find({});
    reply(docentes);
}
}

exports.addDocente = {
  handler: function(request, reply){
    console.log("ENTRO MAN");
    client.query("INSERT INTO Docente VALUES(request.payload.email, SHA3(request.payload.password), request.payload.primerNombre, request.payload.segundoNombre, request.payload.primerApellido, payload.segundoApellido, request.payload.campus, request.payload.departamento, request.payload.telefono, 'admin')");
    reply("Docente agregado")
  }
}

exports.editDocente = {
  handler: function(request, reply){
    docente.update({_id : request.params.DocenteId},
      {email: request.payload.email,
      password: request.payload.password,
      primerNombre: request.payload.primerNombre,
      segundoNombre: request.payload.segundoNombre,
      primerApellido: request.payload.primerApellido,
      segundoApellido: request.payload.segundoApellido,
      campus: request.payload.campus,
      departamento: request.payload.departamento,
      telefono: request.payload.telefono,
      scope: request.payload.scope,}).exec();
      reply("Docente edited")
}}

exports.removeDocente = {
  handler: function(request, reply){
    docente.find({_id: request.params.docenteId}).remove().exec();
    reply("Docente removed");
}}
