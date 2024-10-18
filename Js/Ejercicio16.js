/*Palíndromos*/
let palabra = prompt("Ingresa una palabra:");
let palabraInvertida = palabra.split('').reverse().join('');

if (palabra.toLowerCase() === palabraInvertida.toLowerCase()) {
    console.log(`${palabra} es un palíndromo.`);
} else {
    console.log(`${palabra} no es un palíndromo.`);
}

/*const esPalindromo = cadena => cadena.toLowerCase().replace(/[^a-z0-9]/g, '') === cadena.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');

// Pedir al usuario que ingrese una cadena
const texto = prompt("Ingresa una palabra o frase:");

// Mostrar el resultado en consola
alert(esPalindromo(texto) ? "Es un palíndromo" : "No es un palíndromo");
*/