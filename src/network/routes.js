const router = require('express').Router()
const Paciente = require('./model.js')

router.get('/', async (req, res) => {
    try {
        const pacientes = await Paciente.find()
        res.status(200).send(pacientes)        
    } catch (error) {
        res.status(400).json({status: error.message})
    }
})

router.post('/', async (req, res) => {
    let {body} = req
    const nuevoPaciente = new Paciente(body)
    try {
        await nuevoPaciente.save()
        res.status(201).json({status: `paciente ${body.nombre} creado`})        
    } catch (error) {
        res.status(400).json({status: error.message})
    }
})



module.exports = router