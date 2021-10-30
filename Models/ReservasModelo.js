const {model,Schema}=require('mongoose')

const ReservasModelo=Schema({
    nombreCliente:{
        type:String,
        require:true
    },
    apellidoCliente:{
        type:String,
        require:true
    },
    telefonoCliente:{
        type:String,
        require:true
    },
    fechaInicioReserva:{
        type:String,
        require:true
    },
    fechafinalreserva:{
        type:String,
        require:true
    },
    numeropersonas:{
        type:Number,
        require:true
    }
})
module.exports=model('Reserva',ReservasModelo)