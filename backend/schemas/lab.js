var mongoose = require('mongoose');

var LabSchema = new mongoose.Schema({
  id_Laboratorio: {type: char(15), unique: true, required: true},
  nombre: char(20),
  descripcion: char(30),
  capacidad: Number,
});

module.exports = mongoose.model('Lab', LabSchema);
