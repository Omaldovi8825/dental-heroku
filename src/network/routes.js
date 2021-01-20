const express = require('express')
const paciente = require('./components/paciente/controller.js')
const diagnostico = require('./components/diagnostico/controller.js')

const routes = server => {
    server.use('/api/pacientes', paciente)
    server.use('/api/diagnosticos', diagnostico)
}

module.exports = routes