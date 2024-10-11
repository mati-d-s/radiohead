const express = require('express');
const router = express.Router();

// Definir rutas aquí, por ejemplo:
router.get('/', (req, res) => {
    res.send('Bienvenido a la página de Radiohead');
});

module.exports = router;
