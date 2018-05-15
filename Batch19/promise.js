//Ejemplo d euna PROMESA
//EJEMPLO COMO CON IF Y ELSE
/*
const promise = new Promise((resolve,reject) =>{
	const number = 6
	setTimeout(
		() => {
			if (number > 5){
				resolve(number)
			}else{
				reject(new Error('Menor a 5'))
			}
		},3000);
});

promise
	.then(x => console.log(x))
	.catch(err => console.log(err))
*/

//MISMO EJEMPLO CORTO Y LIMPIO SIN EL IF
/*
const promise = new Promise((resolve,reject) =>{
	const number = 6
	setTimeout(
		() => {  number > 5
				?resolve(number)
				:reject(new Error('Menor a 5'))
			
		},3000);
});

promise
	.then(x => console.log(x))
	.catch(err => console.log(err))
*/

//EJEMPLO DE PROMESA CON RETURN CREO JAJJAJAJA
/*
function randomPromise(number){
	return new Promise((resolve,reject) =>{
		setTimeout(
			() => {  number > 5
					?resolve(number)
					:reject(new Error('Menor a 5'))
			
			},3000);
	});

}

randomPromise(10)
	.then(number=> console.log(number))
	.catch(err => console.log(err))
*/
//en el * 3 es la funcion q finalmente va a mostrar

function randomPromise(number){
	return new Promise((resolve,reject) =>{
		setTimeout(
			() => {  number > 5
					?resolve(number * 3)
					:reject(new Error('Menor a 5'))
			
			},3000);
	});

}

randomPromise(10)
	.then(number=> console.log(number))
	.catch(err => console.log(err))

