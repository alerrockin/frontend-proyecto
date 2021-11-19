var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//estructura json
var CarreraSchema=Schema({
    nombre:String,
    escuela:String,
    universidad:String
});

const Carrera = mongoose.model('carrera', CarreraSchema);

module.exports = Carrera;
