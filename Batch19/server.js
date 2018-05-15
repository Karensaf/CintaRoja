const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//lo siguente es lo q sigue de la de mongoose
const Alumno = require('./mongooseClient')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Crear ussuario con post
app.post('/api/v1/user/create',(req,res) => {
  // es como la base
    //  const {} = req.body
    //imaginar el json q casi siempre trae los siguientes{loq esta aqui} datos
    const {name,last_name,age} = req.body
    let newAlumno = Alumno({
        //aqui adentro se pasa el objeto de lo que quiero q se cree
        //el priemr name es de mongoose la segunda de las{ de aqui arriba}
        /*name:name,
        last_name:last_name,
        age:age*/
        //cuando son iguales, los podemos poner de la siguiente manera
        name,
        last_name,
        age
    });
    //en mongoose va primero el "err" y despues los demás parametros
    newAlumno.save((err,alumno) => {
        //lo siguiente solo oo
        res.send(alumno)
        //para cachar el error se pone el if
        //si es un error manda un error
        if(err) throw err;
        res.send(alumno)        
    })
});
//Todos los usuarios
app.get('/api/v1/user/', (req,res) => {
    Alumno.find().exec().then(alumnos => {
        res.send(alumnos)
    }).catch((err) => {
        res.status(400).send(err)
    })
});

//Traer un usuario
app.get('/api/v1/user/:uid',(req,res) => {
    const {uid} = req.params
   Alumno.findById(uid).exec().then(alumno =>{
       res.send(alumno)
   }).catch(err => {
       res.status(404).send(err)
   })
});

/*VIERNES 27 ABRIL 2018 */
//Un DELETE para borrar usuarios
//Nosotros los backends no debemos borrar nunca un usuario a menos q un abogado lo pida
//******Existe el borrrado físico q es el siguiente:*******
//Por estandar el DELETE No LLEVA BODY
app.delete('/api/v1/user/: uid', (req,res) => {
    const {uid} = req.params
    Alumno.findByIdAndRemove(uid).exec().then(
        alumno => res.send({message:'Alumno borrado'})
    ).catch(err => res.send(err));
});

//PATCH  actualizar por partes
app.patch('/api/v1/user/:uid', (req,res) => {
    const {uid} = req.params
    Alumno.findByIdAndUpdate(uid,req.body,(err,student) => {
        Alumno.findById(uid).exec()
    .then(studet1 => res.send(studet));
    }).catch(err => res.send(err));
});

//PUt





//la última línea siempre va en estos casos
app.listen(3000,() => {
    console.log('Server on 3000')
});