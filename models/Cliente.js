// Definir constante para llamar la dependencia
const mongoose = require ('mongoose');

/*
El modelo que se cree aca debe ser igual al de la base de datos
De lo contrario al usar postman no lo va a encontrar
*/

const clienteSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
        required: true
    },
    correro: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }
},{ versionkey: false});


module.exports = mongoose.model('Cliente', clienteSchema);
