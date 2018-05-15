/*1.-Escribe una funcion que tome una cadena de palabras en 
        mayusculas y la regrese en minusculas.
        Entrada: [“hola”,“como”,“estas”]
        Salida: [“HOLA”,“COMO”,“ESTAS”]
*/
const data = ["hola","como","estas"]
    data.map((x) => {
        console.log(x.toUpperCase())
});



/*
2.- Crea una funcion que reciba como parametro una cadena de palabras
 y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.
        Entrada:[“hola”,“amigos”,“de”,“cinta”,“roja”]
        Salida:[“HOLA”,“amigos”,“DE”,“cinta”,“ROJA”]

        Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
        Saloida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,“YEI”] */