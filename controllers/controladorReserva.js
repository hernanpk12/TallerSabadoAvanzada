const {request, response} = require('express')

// importar servicio
const {insertarReserva} = require('../services/ServicioReserva.js')
const {leerReserva}= require('../services/ServicioReserva.js')
const {leerReservas}= require('../services/ServicioReserva.js')
const {editarReservas}= require('../services/ServicioReserva.js')
const {eliminarReserva}= require('../services/ServicioReserva.js')


async function registrarReserva(peticion=request,respuesta=response){

    let datosReserva=peticion.body;

    try{
     await insertarReserva(datosReserva)
     respuesta.status(200).json({
         estado:true,
         mensaje:"exito al hacer la reserva"
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


 async function buscarReserva(peticion=request,respuesta=response){
  let id = peticion.params.id
  try{
  let Reserva =  await leerReserva(id)
    respuesta.status(200).json({
        estado:true,
        datos:Reserva
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

async  function buscarReservas(peticion=request,respuesta=response){
    try{
        let Reservas =  await leerReservas()
          respuesta.status(200).json({
              estado:true,
              datos:Reservas
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

async function eliminarReservas(peticion=request,respuesta=response){
  let id = peticion.params.id

  try{
    await eliminarReserva(id)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito al eliminar la Reserva"
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

async function editarReserva(peticion=request,respuesta=response){
   let datos = peticion.body
   let id = peticion.params.id
   
   try{
    await editarReservas(id,datos)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito al editar la reserva"
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
    registrarReserva,
    editarReserva,
    eliminarReservas,
    buscarReserva,
    buscarReservas
}
