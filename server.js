const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define your routes here
app.use('/api', require('./routes/index')); // Ajusta esta línea según tu estructura

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
