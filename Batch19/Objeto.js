//Perro EJEMPLO MAL
/*class 	AyudanteSanta{

	//Atributos
	color
	tamano
	peso

	//Metodos
	ladrar()
	correr()
	merder()
}
suma(){
		let suma = this.peso + 12
		console.log(suma)
	}
//ABAJO EN LUGAR de get color es suma

*/
//perro

//set
/*
class 	Perro{
	constructor(color,tamano,peso){
		this.color = color
		this.tamano = tamano
		this.peso = peso

		console.log("El perro se hizo")
	}
	
	//Metodos
	ladrar(){
				console.log("Gaaau")
	}
	correr(){
	}

	getColor(){
		console.log(this.color)
	}
	
	setColor(newColor){
		this.color = newColor
	}

}

var ayudanteSanta = new Perro("Cafe","Grande","Gordo");
var pug = new Perro("Blanco","Pequeño","Gordo");
console.log(ayudanteSanta)
ayudanteSanta.setColor("Negro")
console.log(ayudanteSanta)

*/

//return

/*
class 	Perro{
	constructor(color,tamano,peso){
		this.color = color
		this.tamano = tamano
		this.peso = peso

		console.log("El perro se hizo")
	}
	
	//Metodos
	ladrar(){
		return 'Guauu'
	}
	correr(){
	}

	getColor(){
		return this.color
	}
	
	setColor(newColor){
		this.color = newColor
	}

}



var ayudanteSanta = new Perro("Cafe","Grande","Gordo");
var pug = new Perro("Blanco","Pequeño","Gordo");


var x = pug.ladrar()
console.log(x)
*/
//1.- Crear un objeto de tipo triangulo con atributos base 
//  	y altura y tener el metodo area y perimetro.
/*
class 	Triangulo{
		
	constructor(base,altura){

		this.base = base
		this.altura = altura

		
	}


	//Metodos
	area(){
		return this.base * this.altura / 2
	}
	perimetro(){
		return 3 * this.base
	}

}

var triangulo = new Triangulo(10,15)
console.log(triangulo)
console.log(triangulo.area())
console.log(triangulo.perimetro())

*/
//2.- Crear un objeto tipo cuadrado y obtener el perimetro y area.
/*
class Cuadrado{
	constructor(base,altura){

			this.base = base
			this.altura =altura
	}

	//metodos

	area(){
		return this.base * this.altura
	}

	perimetro(){
		return 4 * this.base
	}

}

var cuadrado = new Cuadrado(20,20)
console.log(cuadrado)
console.log(cuadrado.area())
console.log(cuadrado.perimetro())
*/
//3.- Crear un objeto tipo rectangulo y obtener el perimetro y area.

/*
class Rectangulo{
	constructor(base,altura){

			this.base = base
			this.altura =altura
	}

	//metodos

	area(){
		return this.base * this.altura
	}

	perimetro(){
		return (2 * this.base) + (2 * this.altura)
	}

}

var rectangulo = new Rectangulo(40,20)
console.log(rectangulo)
console.log(rectangulo.area())
console.log(rectangulo.perimetro())
*/

//
/*4.- Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, DNI, sexo, peso y altura.
    calcularIMC()
    esMayorDeEdad()
    El constructor pide nombre, edad,sexo,peso y altura
    Generar el DNI a partir de el nombre, edad y sexo*/

class Persona{
	constructor(nombre,edad,sexo,peso,altura){
		this.peso = peso
		this.altura = altura
		this.edad = edad
	}

	//metodos
//(IMC = peso [kg]/ estatura [cm])
	imc(){
		return this.peso/this.altura
	}
	esMayorDeEdad(){
		return this.edad > 18
	}

}

var persona = new Persona ("erick",46,"hombre",82,165) 
console.log(persona)
console.log(persona.imc())
console.log(persona.esMayorDeEdad())

/*5.- Crear un objeto Cuenta que tenga los siguientes atributos y metodos:
    Titular y cantidad
    ingresar(cantidad)
    retirar(cantidad)
    Hacer las validaciones previas
    Como regla de negocio no debe de tener más de $900 y menos de $10
*/