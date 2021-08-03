const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeName = require('./recipe_name');
const routeId = require('./idRecipes');
const routeType = require('./types')
const { route } = require('./idRecipes');
const routeCreate = require('./recipe_create')

const router = Router();
router.use('/recipes', routeName)
// chechear esto!!!
router.use('/recipes/', routeId)
router.use('/types', routeType)
router.use('/recipe',routeCreate)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
