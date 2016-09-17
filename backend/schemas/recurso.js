var mongoose = require('mongoose');

var RecursoSchema = new mongoose.Schema({
  id_Recurso: {type: String, unique: true, required: true},
  nombre: String,
  descripcion: String,
});

module.exports = mongoose.model('Recurso', RecursoSchema);
