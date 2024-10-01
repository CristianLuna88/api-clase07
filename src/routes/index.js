const {Router} = require('express')
const personaRoutes= require('./persona.reoutes')

const router = Router();

router.use('/personas', personaRoutes)

module.exports = router