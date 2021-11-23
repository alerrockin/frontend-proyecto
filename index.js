var app = require ('./app');
var port = 4000;
//mongoose
var mongoose = require ('./conexDB/conn');
app.listen(port, () => {
    console.log("servidor corriendo ok")
});


