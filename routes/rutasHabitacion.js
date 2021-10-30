const{Router} = require('express')

const RutasHabitaciones=Router()

const {registrarHabitacion}=require('../controllers/controladorHabitacion.js')
const {buscarHabitacion}=require('../controllers/controladorHabitacion.js')
const {buscarHabitaciones}=require('../controllers/controladorHabitacion.js')
const {editarHabitacion}=require('../controllers/controladorHabitacion.js')
const {eliminarHabitaciones}=require('../controllers/controladorHabitacion.js')

RutasHabitaciones.get('/A/B2/habitacion',buscarHabitaciones)

RutasHabitaciones.get('/A/B2/habitacion/:id',buscarHabitacion)
 
RutasHabitaciones.post('/A/B2/habitacion',registrarHabitacion)

RutasHabitaciones.put('/A/B2/habitacion/:id',editarHabitacion)

RutasHabitaciones.delete('/A/B2/habitacion/:id',eliminarHabitaciones)

module.exports=RutasHabitaciones

