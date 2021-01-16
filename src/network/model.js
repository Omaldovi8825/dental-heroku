const {Schema, model} = require('mongoose')

const PacienteSchema = Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    apellido2: {type: String, required: true},
    foto: String,
    folio: {type: String, required: true},
    condicion: String,
    telefono: String,
    celular: String,
    email: String,
    fechaNacimiento: String,
    estadoCivil: {
        type: String, 
        default: 'solter@'
    },
    fechaAlta:{
        type: Date,
        default: new Date()
    }
})

module.exports = model('Paciente', PacienteSchema)