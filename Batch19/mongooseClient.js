const mongoose = require('mongoose')
mongoose.connect('mongodb://prueba:prueba1@ds159459.mlab.com:59459/batch19roja')

const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const alumnoSchema = new Schema({
    alumno:ObjectId,
    name: String,
    last_name: String,
    age: Number,
    email: String,
    city: String
});

var Alumno = mongoose.model('Alumno',alumnoSchema);
//la siguiente es para exportar la funcion
module.exports = Alumno;


