const express = require("express");
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index');

// Define la cadena de conexión correctamente, entre comillas y con credenciales
const url = 'mongodb+srv://<db_iblis515>:<db_GH2dVJ5QkJHTxdBy>@cluster0.zdtmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());
app.use('/', routes);

const connectToMongo = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(8000, () => {
            console.log('Server on port 8000 and DB connected!');
        });
    } catch (error) {
        console.log('Error al conectar con MongoDB:', error);
    }
};

// Llama a la función correctamente
connectToMongo();
