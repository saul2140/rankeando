const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', // Cambia si tu DB está en otro servidor
  user: 'root', // Tu usuario
  password: '', // Tu contraseña
  database: 'rankeando', // Nombre de tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
