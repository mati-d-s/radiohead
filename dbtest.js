const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://usuario:contraseña@cluster0.mongodb.net/radiohead';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
    });
