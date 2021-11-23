const { Router } = require('express');
var ControllerCarrera = require("../controllers/ControllerCarrera");
const router = Router();

router.get("/prueba", ControllerCarrera.prueba);
router.post('/crear', ControllerCarrera.saveCarrera);

module.exports = router;