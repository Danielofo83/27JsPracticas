const namesArray = ["Azael", "Manuel", "Nefer", "Lupita"];
const songsArray = ["Lithium", "Aneurysm", "Polly"];

const printAllElementsInArray = (arr) => {
  for (let i = 2; i < arr.length /*4*/; i++) {
    let currentItem = arr[i];
    console.log(currentItem);
  }
};

printAllElementsInArray(namesArray);

const numbers = [12, 26, 15, 78, 26, 47];
const countries = ["México", "Canadá", "Brasil", "España"];
const people = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Axelle",
      last: "Fleury",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Melati",
      last: "Oort",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Inés",
      last: "Vargas",
    },
    nat: "ES",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Marcus",
      last: "Garrett",
    },
    nat: "GB",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Vasilina",
      last: "Motrichko",
    },
    nat: "UA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Leuntje",
      last: "Van Harmelen",
    },
    nat: "NL",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Tristan",
      last: "Gauthier",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: {
      title: "Madame",
      first: "Marianne",
      last: "Charles",
    },
    nat: "CH",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Maksim",
      last: "Bunechko",
    },
    nat: "UA",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Coline",
      last: "Mathieu",
    },
    nat: "FR",
  },
];

/*
   1.- teniendo en cuenta el array numbers, necesito saber el valor de la suma total de cada número en el array
*/


const sumaTotal = numbers.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumaTotal); 

/*  2.- teniendo en cuenta el array numbers, necesito obtener un nuevo array que incluya únicamente los números pares **/


const numerosPares = numbers.filter(numero => numero % 2 === 0);

console.log(numerosPares); // Imprime [12, 26, 78, 26]

/*  3.- necesito obtener un nuevo array que incluya únicamente los números nones * */ 

const numerosImpares = numbers.filter(numero => numero % 2 !== 0);
console.log(numerosImpares); // Imprime [12, 26, 78, 26]


/*  4.- tomando en cuenta el array countries, necesito obtener un string que este formado con la primer letra de cada país incluido en el array
*/

    const primerasLetras = countries.map(pais => pais.charAt(0));
    const resultado = primerasLetras.join("");
    console.log(resultado); // Imprime "MBCÉ


/*  5.- tomando en cuenta el array countries, necesito obtener un array que contenga los mismos nombres de cada país, pero escritos en mayúsculas*/

const paisesMayusculas = countries.map(pais => pais.toUpperCase());
console.log(paisesMayusculas); // Imprime ["MÉXICO", "CANADÁ", "BRASIL", "ESPAÑA"]



/*   6.- tomando en cuenta el array people, necesito obtener un nuevo array que contenga los nombres completos de cada persona */ 

const nombresCompletos = people.map(persona => `${persona.name.first} ${persona.name.last}`);
console.log(nombresCompletos);

    
/*7.- necesito poder determinar una nacionalidad específica y obtener un array que contenga únicamente aquellas personas que tengan la nacionalidad indicada
      si uso alguna nacionalidad que no coincida con ninguna persona, devolver un string que diga "no hay personas con esta nacionalidad"
*/
const obtenerPersonasPorNacionalidad = (nacionalidad) => {
  const personas = people.filter(persona => persona.nat === nacionalidad);

  if (personas.length === 0) {
    return "No hay personas con esta nacionalidad";
  }

  return personas;
};

// Ejemplo de uso de la función
const nacionalidadBuscada = "FR";
const personasConNacionalidad = obtenerPersonasPorNacionalidad(nacionalidadBuscada);

console.log(personasConNacionalidad);