/*
class Animal{
		constructor(nombre,peso){
			this.nombre = nombre
			this.peso = peso
		}

		getNombre(){
			return this.nombre
		}

		comer (comida){
			return `${this.name} esta comiendo ${comida}`
		}
}

//extends es q va a heredar

class Perro extends Animal{
	constructor(raza,nombre,peso){
		super(nombre,peso)
		this.raza = raza
	}

	getRaza(){
		return this.raza
	}
}
class Gato extends Animal{
	constructor(pelo,nombre,peso){
		super(nombre,peso)
		this.pelo = pelo
	}

}

var pug = new Perro("Pug","Fido","10kg")
var x = pug.getRaza('croquetas')
console.log(x)



var gato = new Gato("Cafe","Luna","2kg")
var x = gato.comer('Pescado')
console.log(x)


*/
//1.- Crear un objeto de tipo Figura que herede de tipo triangulo y rectangulo 
//   	y q compartan caracteristicas.
/*
class Figura{
	constructor(base,altura){

		this.base = base
		this.altura = altura

	}

}

class Triangulo extends Figura{
	constructor(base,altura){
		super(base,altura)
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

class Rectangulo extends Figura{
	constructor(base,altura){
		super(base,altura)
		this.base = base
		this.altura = altura
	}

	//metodos

	area(){
		return this.base * this.altura
	}

	perimetro(){
		return (2 * this.base) + (2 * this.altura)
	}
}


var triangulo = new Triangulo (4,6)
var x = triangulo.area()
console.log(x)


*/


/*2.- Creamos una superclase llamada Electrodomestico con las siguientes
 	caracteristicas:
 	Sus atributos son precio, color, consumo energético y peso.
 	El constructor debe de pedir precio, color y peso.
 	
 	2.1.-Crreamos una subclase llamada Lavadora con las siguientes 
 	características:
 	Su atributo es carga, ademas de los atributos heredados.
 	(El precio de el electrodomestico por la carga)
*/

class Electrodomestico{
	constructor(precio,color,peso,consumo){
		this.precio = precio
		this.color = color
		this.peso = peso
		this.consumo = consumo
	}

	get.Precio(){
		return this.precio
	}

	get.Color(){
		return this.precio
	}

	get.Peso(){
		return this.precio
	}

	set.Consumo(newconsumo){
		
	}
}

class Lavadora extends Electrodomestico{
	constructor(carga,precio,color,peso){
		super(precio,color, peso)
		this.carga = carga
	}
}


var lavadorsita = new Lavadora(8000,"gris",19"Kg",2)

