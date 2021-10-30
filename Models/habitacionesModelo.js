const {model,Schema}=require('mongoose')

const habitacionesModelo=Schema({
    nombreHabitacion:{
        type:String,
        require:true
    },
    fotoHabitacion:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    precioAdulto:{
        type:String,
        require:true
    },
    precioNino:{
        type:String,
        require:true
    },

})
module.exports=model('Habitacion',habitacionesModelo)