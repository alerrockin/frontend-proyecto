const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/colegio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err,res)=>{
    if(err){
        throw err;
    } else{
        console.log('la conexion a la base de datos fue correcta...')
    }
});

module.exports = mongoose;
