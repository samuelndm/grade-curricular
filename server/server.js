require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')

const app = express()
const port = 8080
const clientPath = '../public'


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))


// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.static(path.join(__dirname, clientPath)))
app.use(cors())


const instituicaoRouter = require('./routes/instituicao')
const cursoRouter = require('./routes/curso')
const materiaRouter = require('./routes/materia')

app.use('/instituicao', instituicaoRouter)
app.use('/curso', cursoRouter)
app.use('/materia', materiaRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, clientPath, '/index.html'))
})

app.listen(process.env.PORT || port, () => {
    console.log('Listening at port ' + port)
})