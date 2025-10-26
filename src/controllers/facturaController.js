const Factura = require('../models/Factura');
// OBTENER TODAS las facturas
exports.getAllFactura = async (req, res) => {
    try {
        const factura = await Factura.findAll();
        res.status(200).json(factura);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la Factura',
        error: error.message });
    }
};
// OBTENER UNA factura por ID
exports.getFacturaById = async (req, res) => {
    try {
        const factura = await Factura.findByPk(req.params.id);
        if (factura) {
            res.status(200).json(factura);
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la factura',
        error: error.message });
    }
};
// CREAR una nueva factura
exports.createFactura = async (req, res) => {
    try {
        const newFactura = await Factura.create(req.body);
        res.status(201).json(newFactura);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la factura',
        error: error.message });
    }
};
// ACTUALIZAR una factura por ID
exports.updateFactura = async (req, res) => {
    try {
        const factura = await Factura.findByPk(req.params.id);
        if (factura) {
            await user.update(req.body);
            res.status(200).json(factura);
        } else {
            res.status(404).json({ message: 'factura no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la factura',
        error: error.message });
    }
};
// ELIMINAR una factura por ID
exports.deleteFactura = async (req, res) => {
    try {
        const factura = await Factura.findByPk(req.params.id);
        if (factura) {
            await factura.destroy();
            res.status(204).send(); // 204 No Content
        } else {
            res.status(404).json({ message: 'Factura no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la factura',
        error: error.message });
    }
};