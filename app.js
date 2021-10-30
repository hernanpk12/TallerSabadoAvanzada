// se trae el modelo del servidor
const servidorModelo=require('./Models/ServidorModelo.js')

//se trae el dotenv
require('dotenv').config()

//personalizar el servidor

const servidor= new servidorModelo()

//Encender el servidor

servidor.encenderServidor()