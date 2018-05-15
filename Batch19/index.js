/*
const express = require('express')
const app = express()
//esta funcion va a escuchar  a dos puertos
//Las lineas no cambian, solo el puerto  osea el 3000
app.listen(3000,() => {
    console.log('Server corriendo en el puerto 3000')
});
*/
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app get se pone la ruta q
//callback (request: si me envia a mi el cliente , 
//response: lo envio de aqui al cliente)
app.get('/',(request,response) => {
    response.send({mensaje:'Esta es mi primera API'})
});

app.get('/saludo',(req,res) => {
    res.send({mensaje:'Hola'})
});
//lo q esta después de user es como el id
//req es un onjeto y dentro de el hay parametros
//los ":" es por q es un parametro
app.get('/user/:uid',(req,res) => {
    //la linea siguiente es para obtener el resultado más limpio
  //  console.log(req.params.uid)
    const uid = req.params.uid
    //const {uid} = req.params
    res.send({id:uid})
});

//Query
app.get('/busqueda',(req,res) => {
    console.log(req.query)
    const {q,color} = req.query
    res.send({busqueda:q,
            color:color})
});
///ejemplo checar
/*
app.get('/user/:uid',(req,res) => {
    const uid = req.params.uid
    const nombre = req.params.nombre
    res.send({id:uid,
    nombre:nombre})
});
app.get('/busqueda',(req,res) => {
    const {id,nombre} = req.query
    res.send({busqueda:id=id,
        nombre:nombre 
    
})
});
*/
// P O S T
app.post('/create/user',(req,res) => {
    console.log(req.body)
    const {name, last_name} = req.body
    res.status(201).send({id:1,
        name,
        last_name})
})

app.post('/create/suma',(req,res) => {
    const {valor1,valor2} = req.body
    var a = valor1
    var b = valor2
    var sum = a + b
    res.send({valor1:a,
        valor2:b,
    suma:sum})
})

app.listen(3000,() => {
    console.log('Server corriendo en el puerto 3000')
});

