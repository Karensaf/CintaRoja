//3000 es lo q se tarda el reparecer lo q se fue  a la cola
/*
//setTimeout si lo hago pero dime a donde te regreo cuando lo haga
//callback solo es un ejemplo, no es parametro
console.log(1)
setTimeout(function callback(){
	console.log(2)
},3000)
console.log(3)
*/
//mas limpio lo de arriba
/*
console.log(1)
setTimeout(()=>{
	console.log(2)
},3000)
console.log(3)
*/
// Cuello de botella

/*
console.log(1)
setTimeout(function callback(){
	console.log(2)
},3000)
for (var i = 0; i <999999999; i++);
console.log(3)
*/

//El ejemplo siguiente es lo mismo de arriba pero mas bonito, mas correcto
/*
console.log(1)
setTimeout(()=>{
	console.log(2)
},3000)
for (var i = 0; i <999999999; i++);
console.log(3)
*/
/*
console.log(1)
setTimeout((error,resolve)=>{
	if(error) regresa mensaje de error al usuario

	pintar resolve.name
	console.log(2)
},3000)
for (var i = 0; i <999999999; i++);
console.log(3)

imprime
ve a API
imprime lo q devuelve la API

*/
//lo anterior limpio
console.log(1)
setTimeout((error,resolve)=>{
	console.log(2)
},3000)
for (var i = 0; i <999999999; i++);
console.log(3)






