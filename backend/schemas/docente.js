var mongoose = require('mongoose');

var DocenteSchema = new mongoose.Schema({
  email: {type: char(20), unique: true, required: true},
  password: {type: char(20), required: true},
  primerNombre: char(30),
  segundoNombre: char(30),
  primerApellido: char(30),
  segundoApellido: char(30),
  campus: char(20),
  departamento: char(20),
  telefono: char(13),
});

module.exports = mongoose.model('Docente', DocenteSchema);
