const mongoose = require('mongoose')

const InstituicaoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idLogo: {
        type: String,
        require: true
    },
    campus: {
        type: String,
        required: true
    },
    cursos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Curso'
        }
    ]
})


module.exports = mongoose.model('Instituicao', InstituicaoSchema)