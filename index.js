const express = require('express');
const cors = require('cors');

// Crear la aplicación Express
const app = express();

// Analizar solicitudes JSON
app.use(express.json());
// Analizar formularios HTML
app.use(express.urlencoded({ extended: true }));

// Configurar CORS
const allowedOrigins = {
  development: [''],
  staging: [''],
  production: [''],
};

const origins = allowedOrigins[config.env] || allowedOrigins.development;

const options = {
  origin: (origin, callback) => {
    if (origins.includes(origin) || !origin) {
      // whitelist y mismo origen
      callback(null, true); // permitir acceso
    } else {
      callback(new Error('Not allowed'));
    }
  },
};
app.use(cors(options));

// Iniciar el servidor y escuchar en el puerto especificado
const PORT = config.port;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
