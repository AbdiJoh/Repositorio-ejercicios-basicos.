/*Validación de entrada*/
let entrada = prompt("Ingresa un número:");

if (isNaN(entrada)) {
    console.log("Error: No has ingresado un número válido.");
} else {
    console.log(`Has ingresado el número: ${entrada}`);
}
