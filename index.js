const express = require('express');
var bodyParser = require('body-parser');
const conectarDB = require('./config/db');
const cors = require("cors");
const path = require('path');
const multipart = require('connect-multiparty');
//Creamos el servidor
const app = express();
require('dotenv').config()

//Conectamos a la DB
app.use(cors());
conectarDB().then((val) => {
    console.log('Conectada')
})
app.set('trust proxy', 1);


//Middleware
//Se usa para ejecutar funciones middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

//rutas

app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/productos', require('./routes/producto'));
app.use('/empresa', require('./routes/empresa'));
app.use('/admin/', require('./routes/admin'));
app.use('/api/paginas', require('./routes/pagina'));

app.listen(process.env.PORT || 3000, () => {
    console.log('El servidor esta corriendo perfectamente');
});



