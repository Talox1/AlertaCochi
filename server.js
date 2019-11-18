
// Instalar el servidor express
const express = require ('express');
const path = require ('ruta');

const app = express ();

// Servir solo los archivos estáticos del directorio dist
app.use (express.static (__dirname + '/ dist / AlertaCochi'));

app.get ('/ *', function (req, res) {
    
res.sendFile (path.join (__dirname + '/ dist / AlertaCochi /index.html'));
});

// Inicie la aplicación escuchando en el puerto predeterminado de Heroku
app.listen (process.env.PORT || 8080);