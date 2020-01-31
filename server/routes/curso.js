const express = require('express')
const router = express.Router()
const Curso = require('../models/curso')
const Materia = require('../models/materia')

router.get('/', async (req, res) => {
  try {
    const cursos = await Curso.find().populate()
    res.json(cursos)
  } catch (err) {
    res.json({ message: err.message })
  }
})

router.get('/:id', async (req, res) => {
  const idCurso = req.params.id
  try {
    const curso = await Curso.findById(idCurso)
    res.json(curso)
  } catch (err) {
    res.json({ message: err.message })
  }
})

router.get('/nome:nome', async (req, res) => {
  const nomeReq = req.params.nome
  try {
    const cursos = Curso.find({ nome: nomeReq })
    res.json(cursos)
  } catch (err) {
    res.json({ message: err.message })
  }
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const curso = await Curso.findById(id)

    if (req.body.nome != null) { curso.nome = req.body.nome }

    if (req.body.idCurso != null) { curso.idCurso = req.body.idCurso }

    if (req.body.tipo != null) { curso.tipo = req.body.tipo }

    if (req.body.turno != null) { curso.turno = req.body.turno }

    if (req.body.grade != null) { curso.grade = req.body.grade }

    const cursoAtualizado = await curso.save()

    res.json(cursoAtualizado)
  } catch (err) {
    res.json({ message: err.message })
  }
})

router.patch('/:id/post-materia', async (req, res) => {
  const id = parseInt(req.params.id)

  const periodoAtual = req.body.periodo
  const materia = new Materia({
    codigo: req.body.codigo,
    nome: req.body.nome,
    horas: req.body.horas,
    creditos: req.body.creditos,
    preRequisito: req.body.preRequisito
  })
  try {
    const curso = await Curso.findById(id)

    let semestreAtual = null
    curso.grade.forEach(semestre => {
      if (semestre.periodo == periodoAtual) { semestreAtual = semestre }
    })

    if (semestreAtual == null) {
      semestreAtual.periodo = periodoAtual
    }

    semestreAtual.materias.push(materia)

    await materia.save()
    const cursoAtualizado = await curso.save()

    res.json(cursoAtualizado)
  } catch (err) {
    res.json({ message: err.message })
  }
})

module.exports = router
