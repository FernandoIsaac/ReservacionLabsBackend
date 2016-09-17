var mongoose = require('mongoose');

var ReservacionSchema = new mongoose.Schema({
  id_Reservacion: {type: String, unique: true, required: true},
  descripcion: String,
  estado: String,
  fecha_inicial: Date,
  fecha_final: Date,
  hora_inicial: Date,
  hora_final: Date,
  emaildocente: String,
  id_Laboratorio: String,
});

module.exports = mongoose.model('Reservacion', ReservacionSchema);
