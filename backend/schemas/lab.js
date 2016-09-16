var mongoose = require('mongoose');

var LabSchema = new mongoose.Schema({
  id_Laboratorio: {type: String, unique: true, required: true},
  nombre: String,
  descripcion: String,
  capacidad: Number,
});

module.exports = mongoose.model('Lab', LabSchema);
