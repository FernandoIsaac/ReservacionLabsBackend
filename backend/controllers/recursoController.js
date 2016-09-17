var recurso = require('../schemas/recurso');

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
    var newRecurso = new recurso({
      id_Recurso: {type: String, unique: true, required: true},
      nombre: String,
      descripcion: String,
    });
    newRecurso.save();
    console.log('Recurso added');
    reply(newRecurso);
  }
}

exports.editRecurso = {
  handler: function(request, reply){
    recurso.update({_id : request.params.recursoId},
      {id_Recurso: {type: String, unique: true, required: true},
      nombre: String,
      descripcion: String,}).exec();
      reply("Recurso edited")
}}

exports.removeRecurso = {
  handler: function(request, reply){
    recurso.find({_id: request.params.recursoId}).remove().exec();
    reply("Recurso removed");
}}
