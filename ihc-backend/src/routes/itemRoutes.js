const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// GET /api/items - Obtener todos los items disponibles
router.get('/', itemController.getAllItems);

module.exports = router;
