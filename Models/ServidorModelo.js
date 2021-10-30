const express = require('express')
const cors = require('cors')

//importar conexion

const{conectarBD}=require('../database/conexion.js')

const rutasReserva=require('../routes/rutasReserva.js')
const RutasHabitaciones=require('../routes/rutasHabitacion.js')

class ServidorModelo{
    
    constructor(){
        this.app = express()
        this.conectarConBD()
        this.llamarAuxiliares()
        this.enrutarPeticionesReservas()
        this.enrutarPeticionesHabitaciones()

    }




    encenderServidor(){    
     this.app.listen(process.env.PORT,function(){
    console.log("servidor encendido" + process.env.PORT);
    })

    }

    enrutarPeticionesReservas(){
          this.app.use('/',rutasReserva)
    }
    enrutarPeticionesHabitaciones(){
        this.app.use('/',RutasHabitaciones)
  }




    conectarConBD(){
      conectarBD();

    }

    llamarAuxiliares(){
      this.app.use(express.json())
      this.app.use(cors())
    }


}

module.exports=ServidorModelo