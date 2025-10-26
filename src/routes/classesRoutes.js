const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classesController');
router.get('/', classesController.getAllClasses);
router.get('/:id', classesController.getClassesById); 
router.post('/', classesController.createClasses);
router.put('/:id', classesController.updateClasses);
router.delete('/:id', classesController.deleteClasses);
module.exports = router;