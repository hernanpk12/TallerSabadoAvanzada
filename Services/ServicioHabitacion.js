
const habitacionModelo = require('../Models/habitacionesModelo.js')



async function insertarHabitacion(datosHabitacion){
    let habitacionInsertar = new habitacionModelo(datosHabitacion)

    return await habitacionInsertar.save()

}

async function leerHabitacion(id){

   let Habitacion = await habitacionModelo.findById(id)
   return Habitacion

}

async function leerHabitaciones(){
    let Habitacion = await habitacionModelo.find()
    return Habitacion
}

async function editarHabitaciones(id,datos){

    return await habitacionModelo.findByIdAndUpdate(id,datos)

}

async function eliminarhabitacion(id){
    return await habitacionModelo.findByIdAndRemove(id)
}

module.exports= {insertarHabitacion,leerHabitacion,leerHabitaciones,editarHabitaciones,eliminarhabitacion}