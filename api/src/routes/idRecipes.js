require('dotenv').config();// permite usar el process.env
const { Router } = require("express");
const { apiKey } = process.env;
const { foodUrlSearch, foodUrlDetails } = require("../Constastes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");

// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
router.get("/:idReceta", async (req, res) => {
  const { idReceta } = req.params
  try {
    const response = await axios.get(
      `${foodUrlDetails}/${idReceta}/information?apiKey=${apiKey}`
    );
    //console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
