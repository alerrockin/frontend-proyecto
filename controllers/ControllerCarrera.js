var mongoose=require('../conexDB/conn');
var Carrera=require('../models/carrera');

function prueba(req,res) {
    res.status(200).send({
        message: 'probando una accion'
    });
}

function saveCarrera(req,res){
    var myCarrera = new Carrera(req.body);

    myCarrera.save((err,result)=>{
        res.status(200).send({message:result});
    });
}

module.exports = {
    prueba,
    saveCarrera
}
