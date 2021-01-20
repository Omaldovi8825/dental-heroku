const router = require('express').Router()
const Diagnostico = require('./model.js')

router.get('/', (req, res) => {
    // console.log(req.query.)
    Diagnostico.find()
        .populate('paciente')
        .exec((err, populated) => {
            if(err){
                res.send({error: err.message})
            } else {
                res.send(populated)
            }
        })
})

router.post('/', async (req, res) => {
    try {
        const newDiagnostico = new Diagnostico(req.body)
        const diagnosticoSaved = await newDiagnostico.save()
        res.status(201).send({status: 'diagnostico guardado'})
    } catch (error) {
        res.send(400).json({error: error.message})        
    }
})

module.exports = router

