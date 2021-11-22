const { Router, application } = require('express');
const router = Router();

var controllerCarrera = require('../controllers/ControllerCarrera');

router.get('/prueba', controllerCarrera);

export default router;
