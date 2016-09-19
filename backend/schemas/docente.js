var mongoose = require('mongoose');

var DocenteSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  primerNombre: String,
  segundoNombre: String,
  primerApellido: String,
  segundoApellido: String,
  campus: String,
  departamento: String,
  telefono: String,
  scope : [String]
});

module.exports = mongoose.model('Docente', DocenteSchema);
