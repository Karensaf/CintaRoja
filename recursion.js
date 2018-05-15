//funcion q imprima 4 veces hola

function saludo(n){
    for(var i = 0; i<=n; i++){
        console.log('HOLA')
    }
}

function saludo2(n){
    console.log('HOLA')
    if(n==1) return
    saludo2(n-1)
}
//saludo2(4)
/*
function x(n){
    console.log(n)
    if(n==11) return;
    x(n+1)
}
x(1)
*/
function x(n){
    if(n==11) return;
    x(n+1)
    console.log(n)
}
x(1)

// E J E R C I C I O S

/*Calcular el cociente de dos números enteros de forma recursiva.

2. Pasar de decimal a binario de forma recursiva.

3. Calcular 2 elevado a n de forma recursiva

4. Calcular el número de cifras de un número entero de forma recursiva.

5. Calcular la suma desde 1 hasta un número entero N de forma recursiva.

6. Sumar dos números enteros de forma recursiva.

7. Calcular el resto de la división de forma recursiva */