var mongoose = require('mongoose');

var ReservacionSchema = new mongoose.Schema({
  id_Reservacion: {type: String, unique: true, required: true},
  descripcion: String,
  estado: String,
  fecha_inicial: DATE,
  fecha_final: DATE,
  hora_inicial: Time,
  hora_final: Time,
});

module.exports = mongoose.model('Reservacion', ReservacionSchema);
