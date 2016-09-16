var reservacion = require('../schemas/reservacion');

exports.listReservaciones = {
  handler: function(request, reply){
    var reservaciones = reservacion.find({});
    reply(reservaciones);
}
}

exports.getReservacion = {
  handler: function(request, reply){
    var reservacion = reservacion.find({_id:request.params.reservacionId});
    reply(reservacion);
    console.log('get Reservacion success')
  }
}

exports.addReservacion = {
  handler: function(request, reply){
    var newReservacion = new Reservacion({
      id_Reservacion: request.payload.id_Reservacion,
      descripcion: request.payload.descripcion,
      estado: request.payload.estado,
      fecha_inicial: request.payload.fecha_inicial,
      fecha_final: request.payload.fecha_final,
      hora_inicial: request.payload.hora_inicial,
      hora_final: request.payload.hora_final,
    });
    newReservacion.save();
    console.log('Reservacion added');
    reply(newReservacion);
  }
}

exports.editReservacion = {
  handler: function(request, reply){
    reservacion.update({_id : request.params.ReservacionId},
      {id_Reservacion: request.payload.id_Reservacion,
      descripcion: request.payload.descripcion,
      estado: request.payload.estado,
      fecha_inicial: request.payload.fecha_inicial,
      fecha_final: request.payload.fecha_final,
      hora_inicial: request.payload.hora_inicial,
      hora_final: request.payload.hora_final,}).exec();
      reply("Reservacion edited")
}}

exports.removeReservacion = {
  handler: function(request, reply){
    reservacion.find({_id: request.params.reservacionId}).remove().exec();
    reply("Reservacion removed");
}}
