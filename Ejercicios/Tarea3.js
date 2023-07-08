/*1. - Necesitamos saber de cualquier string, el caracter que se encuentre en cualquier posición que indiquemos.
    si la posición excede la cantidad de caracteres, indicar que no es posible ejecutar el ejercicio*/

    const getCharacterPosition = (string, position) => 
    position > string.length 
    ? "no es posible ejecutar el ejercicio" 
    : string.charAt(position)

console.log(getCharacterPosition("Leonardo", 5));

/* 2. - Necesitamos saber si un texto cualquiera tiene dentro otro string
"Israel" "ra" - si lo incluye
"Israel" "ac" - no lo incluye*/

const includesString = (string, text) => string.includes(text)

console.log(includesString("Israel", "ra"));
console.log(includesString("Israel", "ac"));

/3. - Necesito saber la cantidad de palabras de un texto cualquiera/
const getSizePhrase = phrase => phrase.split(" ").length

console.log(getSizePhrase("Leo esta comiendo gelatina"));

/*4. - Necesito reemplazar todas las coincidencias de una palabra dentro de un texto, con otro texto
"mi perro es gris y es un latoso" "es" "no es"
"mi perro no es gris y no es un latoso"*/

const newPhrase = phrase => phrase.replace(/es/g,"no es")

console.log(newPhrase("mi perro es gris y es un latoso"));

