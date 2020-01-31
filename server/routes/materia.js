const express = require('express')
const router = express.Router()
const Materia = require('../models/materia')

router.get('/', async (req, res) => {
  try {
    const materias = await Materia.find()
    res.json(materias)
  } catch (err) {
    res.json({ message: err.message })
  }
})

module.exports = router
