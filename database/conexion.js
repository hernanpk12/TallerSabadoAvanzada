const mongoose = require('mongoose');



async function conectarBD (){
    try{
        await mongoose.connect(process.env.BASEDATOS);
        console.log("exito")
    }catch(error){
        console.log(`fallamos ${error}`);

    }
}

module.exports={conectarBD}