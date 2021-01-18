const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const {password, dbName, port} = require('./network/config.js')

const router = require('./network/routes.js')

const dbUrl = `mongodb+srv://nodejs_user:${password}@cluster0.aas0d.mongodb.net/${dbName}?retryWrites=true&w=majority`
// const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', express.static(path.join(`${__dirname}/public`)))

app.use('/api/pacientes', router)

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => app.listen(port, () => console.log(`conectado a db y sirviendo en puerto ${port}`)))
    .catch(err => console.log('error al conectarse a db'))


