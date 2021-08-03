
const { Router } = require("express");
const { apikey } = process.env;
const { foodUrlSearch, foodUrlDetails } = require("../Constastes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");

// [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
router.get("/", async (req, res) => {
  
});
module.exports = router;
