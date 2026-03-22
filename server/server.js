// require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 8080
const clientPath = '../public'
const domainRedirectTarget =
  process.env.DOMAIN_REDIRECT_TARGET || 'https://www.guiadouniversitario.com/'
const isProduction = process.env.NODE_ENV === 'production'
const isDomainRedirectEnabled = process.env.DOMAIN_REDIRECT_ENABLED === 'true'

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

if (isProduction && isDomainRedirectEnabled) {
  app.use((req, res, next) => {
    if (
      req.method === 'GET' &&
      (req.path === '/health' || req.path === '/health/')
    ) {
      next()
      return
    }

    res.redirect(308, domainRedirectTarget)
  })
}

app.use(express.static(path.join(__dirname, clientPath)))
app.use(cors())

const instituicaoRouter = require('./routes/instituicao')
const cursoRouter = require('./routes/curso')
const materiaRouter = require('./routes/materia')

app.use('/api/instituicao', instituicaoRouter)
app.use('/api/curso', cursoRouter)
app.use('/api/materia', materiaRouter)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, clientPath, '/index.html'))
})

app.listen(process.env.PORT || port, () => {
  console.log('Listening at port ' + port)
})
