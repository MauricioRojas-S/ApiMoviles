const Classes = require('../models/Classes');
// OBTENER TODOS las clases
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Classes.findAll();
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la clase',
        error: error.message });
    }
};
// OBTENER UNA clase por ID
exports.getClassesById = async (req, res) => {
    try {
        const classes = await Classes.findByPk(req.params.id);
        if (classes) {
            res.status(200).json(classes);
        } else {
            res.status(404).json({ message: 'Clase no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la clase',
        error: error.message });
    }
};
// CREAR un nuevo usuario
exports.createClasses = async (req, res) => {
    try {
        const newClasses = await Classes.create(req.body);
        res.status(201).json(newClasses);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la clase',
        error: error.message });
    }
};
// ACTUALIZAR una clase por ID
exports.updateClasses = async (req, res) => {
    try {
        const classes = await Classes.findByPk(req.params.id);
        if (classes) {
            await user.update(req.body);
            res.status(200).json(classes);
        } else {
            res.status(404).json({ message: 'Clase no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la clase',
        error: error.message });
    }
};
// ELIMINAR una clase por ID
exports.deleteClasses = async (req, res) => {
    try {
        const classes = await Classes.findByPk(req.params.id);
        if (classes) {
            await classes.destroy();
            res.status(204).send(); // 204 No Content
        } else {
            res.status(404).json({ message: 'Clase no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la clase',
        error: error.message });
    }
};