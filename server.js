const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Conectar a MongoDB usando Mongoose
mongoose.connect('mongodb+srv://<db_iblis515>:<db_Siouxsie1>@cluster0.zdtmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { // Cambia esto por tu URI de MongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('No se pudo conectar a MongoDB:', err));

// Define tus rutas aquí
app.use('/api', require('./routes/index'));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
