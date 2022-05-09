/********************/
/* Pedir numero mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado. */
const MAX_NUMERO = 10;
const NUMERO_SUMA = 2;

var numeroSolicitado = prompt("Ingrese un numero por favor:");
var numeroFinal = parseInt(numeroSolicitado);

for (let i = 0; i < MAX_NUMERO ; i++) {
	numeroFinal = numeroFinal + NUMERO_SUMA;
	document.write("<br />");
	document.write(numeroFinal);
	document.write("<br />");
}


/********************/
/* Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingrese "ESC" */
const MAX_NUMERO = 3;

for (let i = 0; i < MAX_NUMERO; i++) {
	var letra = prompt("Ingrese una letra");
	document.write(letra);
}


/********************/
/* Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada */
let numeroDeVeces = prompt("Ingrese un numero para iterar:");
let i = 0;

while (i <= numeroDeVeces) {
	document.write(i + ": Hola" + "<br />");
	i++;
}
