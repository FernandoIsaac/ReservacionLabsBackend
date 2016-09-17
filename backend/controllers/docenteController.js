var docente = require('../schemas/docente');

exports.listDocentes = {
  handler: function(request, reply){
    var docentes = vetr.find({});
    reply(docentes);
}
}

exports.addDocente = {
  handler: function(request, reply){
    var newDocente = new Docente({
      email: request.payload.email,
      password: request.payload.password,
      primerNombre: request.payload.primerNombre,
      segundoNombre: request.payload.segundoNombre,
      primerApellido: request.payload.primerApellido,
      segundoApellido: request.payload.segundoApellido,
      campus: request.payload.campus,
      departamento: request.payload.departamento,
      telefono: request.payload.telefono,
    });
    newDocente.save();
    console.log('Docente added');
    reply(newDocente);
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
      telefono: request.payload.telefono,}).exec();
      reply("Docente edited")
}}

exports.removeDocente = {
  handler: function(request, reply){
    docente.find({_id: request.params.docenteId}).remove().exec();
    reply("Docente removed");
}}
