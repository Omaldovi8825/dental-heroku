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

router.get('/:id', async (req, res) => {
    try {
        const paciente = await Paciente.findById(req.params.id)
        res.status(200).send(paciente)
    } catch (error) {
        res.status(404).json({status: 'no se obtuvieron los datos del paciente'}) 
    }
})

router.post('/', async (req, res) => {
    let {body} = req
    const nuevoPaciente = new Paciente(body)
    try {
        await nuevoPaciente.save()
        res.status(201).json({status: `paciente ${body.nombre} creado`})        
    } catch (error) {
        res.status(400).json({status: 'no se pudo agregar al paciente'})
    }
})

router.put('/:id', async(req, res) => {
    const id = req.params.id
    const paciente = req.body
    try {
        const pacienteToUpdate = await Paciente.findByIdAndUpdate(id, paciente)
        res.status(200).json({status: `paciente ${paciente.nombre} actualizado`})        
    } catch (error) {
        res.status(400).json({status: 'no se pudo actualizar'})        
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const pacienteEliminado = await Paciente.findByIdAndRemove(req.params.id)
        res.status(200).json({status: `paciente ${pacienteEliminado.nombre} eliminado`})        
    } catch (error) {
        res.status(400).json({status: 'no se pudo eliminar'})
    }
})



module.exports = router