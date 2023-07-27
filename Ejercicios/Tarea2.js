/* 1- crear una funcion que reciba un nombre y haga lo siguiente: 
si el nombre tiene mas de 5 letras, imprimir en pantalla " el nombre es largo"
si no, imprimir "el nombre es corto" */

function verificarLongitudNombre(nombre){
    if (nombre.length> 5)
    console.log("el nombre es largo mayor a 5 caracteres");
        else
    console.log("el nombre es corto meno a 5 caracteres");       
}
//ejemplo de la funcion
verificarLongitudNombre("Juan");
verificarLongitudNombre("Luis Daniel");

/* 2-  crear una funcion que reciba 2 numeros y me devuelva un texto con base  en las condiciones siguientes:
si el non, devolver "el resultado es impar"
si es par, devolver "el resultado es par" */

function verificarParImpar (num1,num2){
    let resultado = num1 + num2;
    if (resultado % 2 === 0){
        console.log("el resultado es par");
    } 
    else{
            console.log("el resultado es impar");
        }  
}
let resultado = verificarParImpar(3,6);
console.log(resultado)

let resultado2 = verificarParImpar(5,4);
console.log(resultado2)

/*3 -  crear una funcion que reciba el nombre y apellidos de una persona y me devuelva la cantidad de caracteres del nombre completo. */

function ObtenerLongitudNombreCompleto (Nombre,Apellido){
    let nombreCompleto = Nombre +" "+Apellido;
    console.log(nombreCompleto.length);
    return nombreCompleto.length;
}
    let longitud = ObtenerLongitudNombreCompleto("Pepito","Lopez")
    console.log(longitud);
