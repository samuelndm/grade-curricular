const express = require('express')
const router = express.Router()
const Instituicao = require('../models/instituicao')
const Curso = require('../models/curso')

router.get('/', async (req, res) => {
    try {
        const instituicoes = await Instituicao.find().populate('cursos')
        res.json(instituicoes)
    } catch (err) {
        res.json({ message: err.message })
    }
})

router.get('/:id', async (req, res) => {
    const idInstituicao = req.params.id
    try {
        const instituicao = await Instituicao.findById(idInstituicao).populate('cursos')
        res.json(instituicao)
    } catch (err) {
        res.json({ message: err.message })
    }
})


router.get('/cursoId/:id', async(req,res) => {
    const idCurso = req.params.id

    try {
        const instituicao = await Instituicao.find({cursos: idCurso}).populate('cursos')
        const instituicaoEncontrada = instituicao[0]
        res.json(instituicaoEncontrada)
    } catch (err) {
        res.json({message: err.message})
    }
})

router.post('/', async (req, res) => {
    const instituicao = new Instituicao({
        nome: req.body.nome,
        idLogo: req.body.idLogo,
        campus: req.body.campus,
        cursos: req.body.cursos
    })

    try {
        const novaInstituicao = await instituicao.save()
        res.json(novaInstituicao)
    } catch (err) {
        res.json({ message: err.message })
    }
})


router.delete('/:id', async (req, res) => {
    const idInstituicao = req.params.id
    try {
        const instituicao = await Instituicao.findById(idInstituicao)
        const instituicaoRemovida = await instituicao.remove()
        res.json(instituicaoRemovida)
    } catch (err) {
        res.json({ message: err.message })
    }
})


router.patch('/:id', async (req, res) => {
    const idInstituicao = req.params.id


    try {
        const instituicao = await Instituicao.findById(idInstituicao)

        if (req.body.nome != null)
            instituicao.nome = req.body.nome

        if (req.body.idLogo != null)
            instituicao.idLogo = req.body.idLogo

        if (req.body.campus != null)
            instituicao.campus = req.body.campus

        if (req.body.cursos != null)
            instituicao.cursos = req.body.cursos
        
            const instituicaoAtualizada = await instituicao.save()
        res.json(instituicaoAtualizada)
    } catch (err) {
        res.json({ message: err.message })
    }
})


router.patch('/:id/curso', async (req, res) => {
    const idInstituicao = req.params.id
    const instituicao = await Instituicao.findById(idInstituicao)
    const curso = new Curso({
        nome: req.body.nome,
        idCurso: req.body.idCurso,
        tipo: req.body.tipo,
        turno: req.body.turno,
        grade: req.body.grade

    })
    instituicao.cursos.push(curso)

    try {
        await curso.save()
        const instituicaoAtualizada = await Instituicao.find()
        await instituicao.save()
        res.json(instituicaoAtualizada)
    } catch (err) {
        res.json({ message: err.message })
    }

})




module.exports = router