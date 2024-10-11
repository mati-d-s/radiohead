// routes/index.js

const express = require('express');
const router = express.Router();
const Album = require('../models/album'); // Importa el modelo

// Ejemplo de ruta para crear un nuevo álbum
router.post('/albums', async (req, res) => {
    try {
        const { title, year, description, imgSrc } = req.body;
        const newAlbum = new Album({ title, year, description, imgSrc });
        await newAlbum.save();
        res.status(201).send(newAlbum);
    } catch (error) {
        res.status(400).send({ error: 'Error al crear el álbum' });
    }
});

module.exports = router;
