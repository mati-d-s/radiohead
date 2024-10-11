const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://matiasssoto:K3tkftcjeWdB9cuO@cluster0.mongodb.net/radiohead?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
    });
