const request = require('request');
/*la de arriba no se comenta por q es la libreria
//request.get(//a q URL COY A APUNTAR, COMO LO VOY A DDEVOLVER)
request.get("https://pokeapi.co/api/v2/pokemon/151", 
                        (error,response,body)=>{
                            console.log(error)
                            console.log(response.statusCode)
                            let respuesta = JSON.parse(body)
                          //ejemplo1  console.log(respuesta.stats)
                            for(var i = 0; i < respuesta.stats.length; i++){
                                console.log("--------------")
              //                  console.log(respuesta.stats[i].)
               //                 console.log(respuesta.stats[i].stat.name)
             //                   console.log(respuesta.stats[i].stat)
                             console.log(respuesta.stats[i].stat.url)
                            }
                            //console.log(body)
                         });
*/
//  P R O M E S A
/*
function peticionPromesa (){
   return new Promise((resolve,reject)=>{
        // Aquí se imprime el código q va a ir a la cola
        request.get("https://pokeapi.co/api/v2/pokemon/151",
                    (err,response,body)=>{
                        if (response.statusCode ==200){
                            //es lo mismo d eabajo
                           // resolve(JSON.parse(body))
                           let json = JSON.parse(body)
                           resolve(json)
                        }else{
                            reject('Tuvimos un error!!!:(')
                        }
                    });
   });
}

peticionPromesa()
    .then(response => console.log(response))
    .catch(err => console.log(err))
*/

// E J E R C I C I O S 
/*
//1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
request.get("https://pokeapi.co/api/v2/pokemon/151", 
                        (error,response,body)=>{
                            console.log(error)
                            console.log(response.statusCode)
                            let respuesta = JSON.parse(body)
                          //ejemplo1  console.log(respuesta.stats)
                            for(var i = 0; i < respuesta.types.length; i++){
                                console.log("--------------")
                                console.log(respuesta.types[i].type.name)
                                console.log(respuesta.types[i].type.url)
                            }
                            //console.log(body)
                         });
*/
//2.- Hacer una funcion que haga una peticion
/*(Ejemplo: peticionLibro(“i robot”);
http://openlibrary.org/search.json?q=i+robot)
buscar un libro y traer el o los autores*/
/*
function peticionLibro(){
    return new Promise((resolve,reject)=>{
        request.get("http://openlibrary.org/search.json?q=i+robot",
            (err,response,body)=>{
                console.log(error)
                console.log(response.statusCode)
                let respuesta = JSON.parse(body)
        for(var i = 0; i < respuesta.docs.length; i++){
            console.log("--------------")
            console.log(respuesta.docs[i].author_name)
        }
            });
  
        });
}
*/
/*
//ejemplo 2   corto
request.get("http://openlibrary.org/search.json?q=i+robot",
(error,response,body)=>{
   console.log(error)
   console.log(response.statusCode)
   let respuesta = JSON.parse(body)
   for(var i = 0; i < respuesta.docs.length; i++){
       console.log('--------------------------------------------')
       console.log(respuesta.docs[i].author_name)
   }
});
*/


// el buenas Daavid
/*
function peticionPromesa(){
    return new Promise((resolve,reject) => {
        //Es el codigo que va a la cola de .JS
        request.get("http://openlibrary.org/search.json?q=i+robot",
        (err,response,body)=>{
            if (response.statusCode == 200){
                let json = JSON.parse(body)
                resolve(json)
            }else{
                reject('Errorsote!!! :(')
            }
        });
    });
 }
 
 peticionPromesa()
    .then(response => {
        for(var i = 0 ; i < response.docs.length; i++){
            if(response.docs[i].author_name.length ==1){
                console.log(response.docs[i].author_name)
            }
        }
        console.log(response.docs.length)
    })
    .catch(err => console.log(err))
*/
/*4.- Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) 
y devolver el género de la banda deseada*/
/*
function peticionPromesa(){
    return new Promise((resolve,reject) =>{
        request.get("http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse",
            (err,response,body) => {
                if(response.statusCode == 200){
                    let json = JSON.parse(body)
                    resolve(json)
                }else{
                    reject('Errorsuki!!!!!')
                }
            });
    });
}

 peticionPromesa()
    .then(response =>{
        for(var i = 0; i< response.artists.length; i++){
                console.log(response.artists[i].strGenre)
            }
    })
    .catch(err => console.log(err))
    */
/*5.- Traer los primeros 151 pokemon de la primera generacion y 
devolver un objeto con el nombre, sus moves, tipo, tamaño y peso */

function peticionPromesa(){
    return new Promise((resolve,reject) =>{
        request.get("https://pokeapi.co/api/v2/pokemon/",
            (err,response,body) => {
                if(response.statusCode == 200){
                    let json = JSON.parse(body)
                    resolve(json)
                }else{
                    reject('Errorsuki!!!!!')
                }
            });
    });
}

 peticionPromesa()
    .then(response =>{
        for(var i = 0; i< response.artists.length; i++){
                console.log(response.artists[i].strGenre)
            }
    })
    .catch(err => console.log(err))
*/
