const {request, response} = require('express')

// importar servicio
const {insertarHabitacion} = require('../services/ServicioHabitacion.js')
const {leerHabitacion}= require('../services/ServicioHabitacion.js')
const {leerHabitaciones}= require('../services/ServicioHabitacion.js')
const {editarHabitaciones}= require('../services/ServicioHabitacion.js')
const {eliminarHabitacion}= require('../services/ServicioHabitacion.js')


async function registrarHabitacion(peticion=request,respuesta=response){

    let datosHabitacion=peticion.body;

    try{
     await insertarHabitacion(datosHabitacion)
     respuesta.status(200).json({
         estado:true,
         mensaje:"exito"
     }
     )
    }
    catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upss...."+error
        }
        )

    }

}


 async function buscarHabitacion(peticion=request,respuesta=response){
  let id = peticion.params.id
  try{
  let Habitacion =  await leerHabitacion(id)
    respuesta.status(200).json({
        estado:true,
        datos:Habitacion
    }
    )
   }
   catch(error){
       respuesta.status(400).json({
           estado:false,
           mensaje:"upss...."+error
       }
       )

   }
}

async  function buscarHabitaciones(peticion=request,respuesta=response){
    try{
        let Habitacion =  await leerHabitaciones()
          respuesta.status(200).json({
              estado:true,
              datos:Habitacion
          }
          )
         }
         catch(error){
             respuesta.status(400).json({
                 estado:false,
                 mensaje:"upss...."+error
             }
             )
      
         }
}

async function eliminarHabitaciones(peticion=request,respuesta=response){
  let id = peticion.params.id

  try{
    await eliminarHabitacion(id)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito al eliminar"
    }
    )
   }
   catch(error){
       respuesta.status(400).json({
           estado:false,
           mensaje:"upss...."+error
       }
       )

   }

}

async function editarHabitacion(peticion=request,respuesta=response){
   let datos = peticion.body
   let id = peticion.params.id
   
   try{
    await editarHabitaciones(id,datos)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito al editar"
    }
    )
   }
   catch(error){
       respuesta.status(400).json({
           estado:false,
           mensaje:"upss...."+error
       }
       )

   }
   
}

module.exports={
    registrarHabitacion,
    editarHabitacion,
    eliminarHabitaciones,
    buscarHabitacion,
    buscarHabitaciones
}
