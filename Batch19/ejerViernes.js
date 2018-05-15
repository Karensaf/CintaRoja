/*1.-Devolver los asteroides que sean potencialmente peligrosos para la tierra
de la semana pasada, hasta hoy*/
/*primer intento
const request = require('request');
function peticionNasa(){
    return new Promise((resolve,reject)=>{
request.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-20&api_key=8Q62Aw1YNHqMxEjUr8gqL8FPJL41kEtoZoW16kN2", 
                        (error,response,body)=>{
                            if(response.statusCode == 200){
                                let json = JSON.parse(body)
                                resolve(json)
                            }else{
                                reject('Errorsuki!!!!!')
                            }
                        });
    });
}
peticionNasa()
    .then(response => console.log(response))
.catch(err => console.log(err))
*/
const request = require('request');
function peticionNasa(){
    return new Promise((resolve,reject)=>{
request.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-20&api_key=8Q62Aw1YNHqMxEjUr8gqL8FPJL41kEtoZoW16kN2", 
                        (error,response,body)=>{                           
                            if(response.statusCode == 200){
                                let json = JSON.parse(body)
                                resolve(json)
                            }else{
                                reject('Errorsuki!!!!!')
                            }
       });
    });
}
peticionNasa()
.then(response=> {
    for (var fecha in response.near_earth_objects){
        for (var listfech in response.near_earth_objects.fecha){
            console.log(listfech)
        }
      //  console.log(fecha)
       }
   // console.log(response)        
})

    /*function mostrar_propiedades(objeto, nombreObjeto) {
   var resultado = "";
   for (var i in objeto) {
      resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
   }
   return resultado;
}
     */
  
   
.catch(err => console.log(err))
