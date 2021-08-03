require('dotenv').config();// permite usar el process.env
const { Router } = require("express");
const { apiKey } = process.env;
const { foodUrlSearch, foodUrlDetails } = require("../Constastes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
// [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const response = await axios.get(
      `${foodUrlSearch}?apiKey=${apiKey}&query=${name}`
    );
    //console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
