/*function calcularTarifa(horas) {
    let tarifa;

    if (horas <= 0.5) {
        tarifa = 0;
    } else if (horas > 0.5 && horas < 2) {
        tarifa = 10 * horas;
    } else if (horas >= 2 && horas <= 3) {
        tarifa = 25;
    } else if (horas > 3) {
        tarifa = 30;
    } else {
        return "Entrada inválida. Por favor, ingrese un número válido de horas.";
    }

    return `El total a pagar por ${horas} horas es: $${tarifa}`;
}

// Ejemplo de uso
let horasUsadas = parseFloat(prompt("Ingrese el número de horas que utilizó el estacionamiento:"));
alert(calcularTarifa(horasUsadas));*/

/*function calcularTarifa(horas) {
    let tarifa;

    if (horas <= 0.5) {
        tarifa = 0;
    } else if (horas > 0.5 && horas < 2) {
        tarifa = 10 * Math.ceil(horas); // Redondeamos las horas hacia arriba
    } else if (horas >= 2 && horas <= 3) {
        tarifa = 25;
    } else if (horas > 3) {
        tarifa = 30;
    } else {
        return "Entrada inválida. Por favor, ingrese un número válido de horas.";
    }

    return `El total a pagar por ${horas} horas es: $${tarifa}`;
}

// Ejemplo de uso
let horasUsadas = parseFloat(prompt("Ingrese el número de horas que utilizó el estacionamiento:"));
if (!isNaN(horasUsadas) && horasUsadas >= 0) {
    alert(calcularTarifa(horasUsadas));
} else {
    alert("Por favor, ingrese un valor válido.");
}*/

function calcularTarifa(horas) {
    let tarifa;

    // Validamos si el tiempo ingresado es más de 24 horas
    if (horas > 24) {
        let diasCompletos = Math.floor(horas / 24);  // Calculamos los días completos
        let horasRestantes = horas % 24;  // Calculamos las horas restantes después de los días completos
        let tarifaDias = diasCompletos * 30;  // Asumimos que 24 horas tienen un costo fijo de $30 por día

        // Calculamos la tarifa para las horas restantes
        tarifa = tarifaDias + calcularTarifa(horasRestantes);

    } else if (horas <= 0.5) {
        tarifa = 0;  // No se cobra si es menos de media hora
    } else if (horas > 0.5 && horas < 2) {
        tarifa = 10 * Math.ceil(horas);  // Se cobra $10 por cada hora, redondeando hacia arriba
    } else if (horas >= 2 && horas <= 3) {
        tarifa = 25;  // Tarifa fija de $25 si está entre 2 y 3 horas
    } else if (horas > 3) {
        tarifa = 30;  // Tarifa fija de $30 si está más de 3 horas pero menos de 24
    } else {
        return "Entrada inválida. Por favor, ingrese un número válido de horas.";
    }

    return `El total a pagar por ${horas} horas es: $${tarifa}`;
}

// Ejemplo de uso
let horasUsadas = parseFloat(prompt("Ingrese el número de horas que utilizó el estacionamiento:"));
if (!isNaN(horasUsadas) && horasUsadas >= 0) {
    alert(calcularTarifa(horasUsadas));
} else {
    alert("Por favor, ingrese un valor válido.");
}
