/*
1.- Escriba un programa que pida dos números enteros
     y que calcule su división, escribiendo si la división es exacta o no.

var x = 8
var y = 5
var div = 8/5

if(div%0){
	console.log("Es ex")
}else{
	console.log("No")
}

2.- Escriba un programa que pida dos números y que conteste
     cuál es el menor y cuál el mayor o que escriba que son iguales.

	var x = 6
	var y = 3
if (x<y){
	console.log("x es menor")
}else if (x>y){
	console.log("x es mayor")
}else{
	console.log("son iguales")
}
*/

	/*
3- Escriba un programa que pida el año actual y un año cualquiera 
    y que escriba cuántos años han pasado desde ese año o 
    cuántos años faltan para llegar a ese año.
*/
/*
	var a = 2018
	var b = 2000
	var pasaron = a - b
	var faltan =b - a

	if (a>b){
		console.log('Han pasado ' + pasaron + ' años desde el año ' + b)
		} else if(a<b){
			console.log ('Faltan ' + faltan + ' años para llegar al año ' + b)
		}

*/		
	
	/*
//4.- Escriba un programa que pida tres números y que escriba 
  //  si son los tres iguales, si hay dos iguales o si son los tres distintos.

 var a = 22
 var b = 45
 var c = 45

if(a==b && b==c){
	console.log("Los tres números son iguales")
}else if(a==b && b!=c || a!=b && b==c || a==c && c!=b){
	console.log("Hay dos números iguales")
}else{
	console.log("Los tres númerosson distintos")
}
*/
  
//5.- Pedir tres números y obtener el mayor de ellos.
 /**/
var a = 900
var b = 140
var c = 3000

if(a>b && a>c){
	console.log(a + ' es el número mayor.')
}else if(a<b && b>c){
	console.log(b + ' es el número mayor.')
}else{
	console.log(c + ' es el numero mayor.')
}


