const mongoose = require('mongoose');
require('dotenv').config();


// Crear la conexión con Mongo DB

// Ejemplo 1 con PROMESA
const conectarDB = () =>{

    mongoose 
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Estamos conectados con Mongo DB'))
    .catch((err) => console.error(err));
}

// Vamos a decirle al modulo que lo vamos a manejar con el modelo
module.exports = conectarDB;