// En los modelos voy a tener las funcionalidades y vamos a usar la conexión con la BD
const { conn } = require("../config/conn");

const getAll = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM product;");
    return rows;
  } catch (error) {
    throw error;
  }
};

const getOne = async (params) => {
  try {
    const [rows] = await conn.query("SELECT * FROM product WHERE ?;", params);
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  getOne,
};
