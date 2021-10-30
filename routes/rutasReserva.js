const{Router} = require('express')

const RutasReservas=Router()

const {registrarReserva}=require('../controllers/controladorReserva.js')
const {buscarReserva}=require('../controllers/controladorReserva.js')
const {buscarReservas}=require('../controllers/controladorReserva.js')
const {editarReserva}=require('../controllers/controladorReserva.js')
const {eliminarReservas}=require('../controllers/controladorReserva.js')

RutasReservas.get('/plaza/B1/Reserva',buscarReservas)

RutasReservas.get('/plaza/B1/Reserva/:id',buscarReserva)
 
RutasReservas.post('/plaza/B1/Reserva',registrarReserva)

RutasReservas.put('/plaza/B1/Reserva/:id',editarReserva)

RutasReservas.delete('/plaza/B1/Reserva/:id',eliminarReservas)

module.exports=RutasReservas

/*Nombre Cliente
 Apellido Cliente
 Telefono Cliente
 Fecha inicio Reserva
 Fecha Final Reserva
 Número de personas*/