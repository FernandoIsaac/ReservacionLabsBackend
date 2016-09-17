var lab = require('../schemas/lab');

exports.listLabs = {
  handler: function(request, reply){
    var labs = lab.find({});
    reply(labs);
}
}

exports.getLab = {
  handler: function(request, reply){
    var labs = lab.find({_id:request.params.labId});
    reply(labs);
    console.log('get Lab success')
  }
}

exports.addLab = {
  handler: function(request, reply){
    var newLab = new lab({
      id_Laboratorio: request.payload.id_Laboratorio,
      nombre: request.payload.nombre,
      descripcion: request.payload.descripcion,
      capacidad: request.payload.capacidad,
    });
    newLab.save();
    console.log('Lab added');
    reply(newLab);
  }
}

exports.editLab = {
  handler: function(request, reply){
    lab.update({_id : request.params.LabId},
      {id_Laboratorio: request.payload.id_Laboratorio,
      nombre: request.payload.nombre,
      descripcion: request.payload.descripcion,
      capacidad: request.payload.capacidad,}).exec();
      reply("Lab edited")
}}

exports.removeLab = {
  handler: function(request, reply){
    lab.find({_id: request.params.labId}).remove().exec();
    reply("Lab removed");
}}
