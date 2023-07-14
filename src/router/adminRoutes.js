const express = require("express");
const router = express.Router();
const uploadFile = require('../middlewares/uploadFiles');
const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

const controllers = require("../controllers/adminControllers");


const loginValidation = [
  body('email').isEmail().withMessage('Necesito que ingrese un correo válido'),
  body('password').isLength({ min : 7 }).isAlphanumeric().withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números.')
]


router.get("/", controllers.adminView);
router.get("/create", controllers.createView);
router.post("/create", uploadFile.array('images', 2), controllers.createItem);
router.post("/create/bulk", controllers.bulkCreate);
router.get("/edit/:id", controllers.editView);
router.put("/edit/:id", controllers.editItem);
router.delete("/delete/:id", controllers.deleteItem);
router.get("/login", controllers.loginView);
router.post("/login", loginValidation, validateInput, controllers.loginUser);
router.get("/register", controllers.registerView);
router.post("/register", controllers.registerUser);

module.exports = router;
