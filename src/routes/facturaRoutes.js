const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');
router.get('/', facturaController.getAllFactura);
router.get('/:id', facturaController.getFacturaById);
router.post('/', facturaController.createFactura);
router.put('/:id', facturaController.updateFactura);
router.delete('/:id', facturaController.deleteFactura);
module.exports = router;