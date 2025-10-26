const User = require('../models/User');
// OBTENER TODOS los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const User = await User.findAll();
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios',
        error: error.message });
    }
};
// OBTENER UN user por ID
exports.getUserById = async (req, res) => {
    try {
        const User = await User.findByPk(req.params.id);
        if (product) {
            res.status(200).json(User);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener al usuario',
        error: error.message });
    }
};
// CREAR un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear al usuario',
        error: error.message });
    }
};
// ACTUALIZAR un usuario por ID
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar al usuario',
        error: error.message });
    }
};
// ELIMINAR un usuario por ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(204).send(); // 204 No Content
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar al usuario',
        error: error.message });
    }
};