const Cliente = require('../models/Cliente');

/**
 * Función para buscar los clientes
 */
exports.buscarClientes = async(req, res) => {

    try {
        let cliente = await Cliente.find();
        res.json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar los cliente')  
    }
}


/**
 * Función: AGREGAR CLIENTES
 */

exports.agregarClientes = async(req, res) => {
    
    try {
        let cliente;
        cliente = new Cliente(req.body)
        await cliente.save();
        res.send(cliente);

    } catch (error) {
      console.log(error)
      res.status(500).send('Hubo un error al agregar un cliente')  
    }
}

//Función para mostrar un solo cliente
exports.buscarCliente = async(req,res) =>{
    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:"Cliente no encontrado con ese ID"});
            return
        }
        res.send(cliente);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente por ID')      
        return
    }
}

/**
 * Esta función nos sirve para eliminar un cliente
 */

exports.eliminarCliente = async(req,res) =>{
    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"})
            return
        }

        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El cliente ha sido eliminado"});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un cliente por ID')
    }


}

/**
 * Esta función nos sirve para actualizar un cliente
 */

exports.actualizarCliente = async(req,res) =>{
    try {
        const{nombres, apellidos, documentos, correo , telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id); 

        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"});
            return

        }else{
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documentos = documentos;
            cliente.correo = correo;
            cliente.direccion = direccion

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
            res.json(cliente);
        }


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar un cliente')  
    }

}