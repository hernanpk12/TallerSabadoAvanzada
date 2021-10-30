const ReservaModelo =  require('../Models/ReservasModelo.js')


async function insertarReserva(datosReserva){
    let reservaInsertar = new ReservaModelo(datosReserva)

    return await reservaInsertar.save()

}

async function leerReserva(id){

   let Reserva = await ReservaModelo.findById(id)
   return Reserva

}

async function leerReservas(){
    let reservas = await ReservaModelo.find()
    return reservas
}

async function editarReservas(id,datos){

    return await ReservaModelo.findByIdAndUpdate(id,datos)

}

async function eliminarReserva(id){
    return await ReservaModelo.findByIdAndRemove(id)
}

module.exports= {insertarReserva,leerReserva,leerReservas,editarReservas,eliminarReserva}