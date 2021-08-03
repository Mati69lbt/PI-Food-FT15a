
const { Router } = require("express");
const { apikey } = process.env;
const { foodUrlSearch, foodUrlDetails } = require("../Constastes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");

// POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
router.post("/", async (req, res) => {
  
});
module.exports = router;
