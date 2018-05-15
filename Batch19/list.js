/*
onjeto
var cars =["Volvo","BMW","Ford"]

console.log(typeof(cars))
*/


var cars =["Volvo","BMW","Ford"]
var amigosFB = ["Juanita","Pedrito","Panchito","Heladio"]
var numbers = [4,3,5,734,6,5]
//la lista de abajo no tiene nada, pero se le puede agregar algo con push
var list = []

//console.log(cars.length)
//console.log(cars[0])
//console.log(cars[3]) aparece undefine por q son 3 elemento pero comienza de 0
/*
for(var i = 0; i < amigosFB.length; i++){
	console.log(amigosFB[i])
}
*/

console.log(cars)
cars.push("Nissan")
console.log(cars)
cars.splice(1,0,"Honda")
console.log(cars)
cars.sort()
console.log(cars)
cars.reverse()
console.log(cars)
numbers.sort()
console.log(numbers)
numbers.reverse()
console.log(numbers)
/*
cars.splice(1,0,"Honda")  es para ordenar el primer numero es el lugar 
y el segundo se borra del q pones hacia la derecha
console.log(cars)

cars.sort()  lo ordena alfabeticmaente o del numero menor al mayor
console.log(cars)


numbers.reverse()  lo ordena de reversa alfabeticamente o del numero mayor al menor
console.log(numbers) 
*/