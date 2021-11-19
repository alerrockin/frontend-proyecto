const { Router, application } = require('express');
const router = Router();
export default router;

var controllerCarrera = require('../controllers/ControllerCarrera');

router.get('/prueba', controllerCarrera);