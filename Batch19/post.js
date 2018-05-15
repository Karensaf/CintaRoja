/*
const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

const URI = 'authors/'

var URL = URL_BASE + URI

var jsonSend = {
    "name": "Pedrito",
    "last_name": "Perez perez",
    "nacionalidad": "MX",
    "biography": "Ese es una biografía de prueba del batch19 cinta roja",
    "gender": "M",
    "age": 35
    //"is_alive": true
}
//con lo suguiente le dices q tipo de petición es osea q es POST
request.post({url:URL, form:jsonSend}, (err,status,body) => {
    console.log(status.statusCode)
    console.log(body)
});
*/
const request = require('request')

function peticionId(nom,ap){
    return new Promise((resolve,reject) => {
        const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

    const URI = 'authors/'
    
    var URL = URL_BASE + URI
    
    var jsonSend = {
        "name": "Pedrito",
        "last_name": "Perez perez",
        "nacionalidad": "MX",
        "biography": "Ese es una biografía de prueba del batch19 cinta roja",
        "gender": "M",
        "age": 35
        //"is_alive": true
    }
        request.post({url:URL, form:jsonSend},
                    (error,status,body) => {
                        if(status.statusCode == 201){
                            let json = JSON.parse(body)
                            resolve(json.id)

                        }else{
                            reject('Errorsuki!!!!!')
                        }
   });
});
}
function peticionPatch(id){
    return new Promise((resolve,reject) => {
        const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'
    //const URI = 'authors/${id}/'
    const URI = 'authors/355/'
    
    var URL = URL_BASE + URI
    
    var jsonSend = {
      /*  "name": "Pedrito",
        "last_name": "Perez perez",
        "nacionalidad": "MX",
        "biography": "Ese es una biografía de prueba del batch19 cinta roja",
        "gender": "M",
        "age": 35,*/
        "is_alive": true
    }
        request.patch({url:URL, form:jsonSend},
                    (error,status,body) => {
                        if(status.statusCode == 200){
                            let json = JSON.parse(body)
                            resolve(json)

                        }else{
                            reject('Errorsuki!!!!!')
                        }
   });
});
}
//Rodrigo
/*
peticionId()
    .then (body =>  peticionPatch())
    .then (objeto => console.log(objeto))
    .catch(err => console.log(err))
    */
//Raúl
peticionId()
    .then(body => {
        peticionPatch()
            .then(objeto => console.log(objeto))
            .catch(err =>console.log(err))
    })
    .catch(err => console.log(err))