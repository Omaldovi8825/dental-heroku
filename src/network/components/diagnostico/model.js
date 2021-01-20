const { Schema, model } = require('mongoose')

// const schema = Schema

const DiagnosticoSchema = Schema({
    paciente: {
        type: Schema.ObjectId,
        ref: 'Paciente'
    },
    fecha: {
        type: Date,
        default: new (Date)
    },
    diagnostico: String,
    tratamiento: String,
    piezaDentaria: String,
    cuota: Number,
    aCuenta: Number
})

module.exports = model('Diagnostico', DiagnosticoSchema)