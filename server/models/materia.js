const mongoose = require('mongoose')

const materiaSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  horas: {
    type: String
  },
  creditos: {
    type: String
  },
  preRequisito: [{
    type: String
  }]
})

module.exports = mongoose.model('Materia', materiaSchema)
