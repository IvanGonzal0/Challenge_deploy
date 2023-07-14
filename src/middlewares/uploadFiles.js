const multer = require("multer");
const path = require("path");
/* Lógica para guardar imagenes en el server*/
const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.resolve(__dirname, "../../public/img")),
  filename: (req, file, cb) =>{
    cb(null, ` ${Date.now()}-${file.originalname}`)
  } 
});

const uploadFile = multer({ storage });

module.exports = uploadFile;