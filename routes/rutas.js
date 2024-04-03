//
const express = require('express');
const router = express.Router();

// Definimos ruta del controlador
const clienteController = require('../controllers/clienteController');

// Estas son las rutas de nuestro CRUD

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarCliente);
router.delete('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarCliente);




module.exports = router;