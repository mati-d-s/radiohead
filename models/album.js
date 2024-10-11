// models/album.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definición del esquema del álbum
const albumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    }
});

// Crear y exportar el modelo Album basado en el esquema
const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
