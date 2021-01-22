const router = require('express').Router()
const Diagnostico = require('./model.js')

router.get('/', async (req, res) => {
    try {
        if(req.query.paciente){
            const filteredDiagnosis = await Diagnostico.find({paciente: req.query.paciente})
            res.status(200).send(filteredDiagnosis)
        } else {
            const filteredDiagnosis = await Diagnostico.find()
            res.status(200).send(filteredDiagnosis)
        }
    } catch (error) {
        res.status(400).send({status: 'no se pudieron traer los diagnosticos'}) 
    }
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

router.delete('/:id', async (req, res) => {
    try {
        await Diagnostico.findByIdAndRemove(req.params.id)
        res.status(200).send({status: 'diagnostico eliminado'})
    } catch (error) {
        res.status(400).send({status: 'no se puedo eliminar diagnostico'})
    }
})

module.exports = router

// router.get('/', (req, res) => {
    //     console.log(req.query.)
    //     Diagnostico.find()
    //         .populate('paciente')
    //         .exec((err, populated) => {
    //             if(err){
    //                 res.send({error: err.message})
    //             } else {
    //                 res.send(populated)
    //             }
    //         })
    // })