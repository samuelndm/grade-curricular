const mongoose = require('mongoose')

const cursoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idCurso: {
        type: String
    },
    tipo: {
        type: String,
        required: true
    },
    turno: {
        type: String,
        required: true
    },
    grade: [
        {
            periodo: {
                type: Number,
                required: true

            },
            materias: [
                {
                    codigo: String,
                    nome: String,
                    horas: String,
                    creditos: String,
                    preRequisito: []
                }
            ]
        }
    ]

})


module.exports = mongoose.model('Curso', cursoSchema)