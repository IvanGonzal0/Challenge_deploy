//Uso mysql y la cfg del .env
const mysql = require("mysql2");
require("dotenv").config();

/*
 *-Creamos un pool de conexiones
 */

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/*
 *-Testeamos que la conexión sea exitosa
 */
pool.getConnection((error, connection) => {
  if (error) {
    console.error("Error al obtener una conexión:", error);
  } else {
    console.log("Conexión exitosa a la base de datos");
    connection.release();
  }
});

/*
 *-Exportamos el pool de conexión
 */
module.exports = {
  conn: pool.promise(),
};
