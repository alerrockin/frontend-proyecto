const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/colegio", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err,res)=>{
    if(err){
        throw err;
    } else{
        console.log('la conexion a la base de datos fue correcta...')
    }
});

module.exports = conn;
