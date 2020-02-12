//Cotizador Automático
//Variables
const precioBase = 250;
//Fecha actual
var fecha = new Date();
var anioActual = fecha.getYear();
var mesActual = fecha.getMonth() + 1;;
var diaActual = fecha.getDate();
//Datos Cliente
//var nombreCompleto = prompt("Ingrese su nombre completo: ", "Nombres y Apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento: ", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento: ", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento: ", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
//Datos conyuge e hijos
/*var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var edadConyugue = prompt("Que edad tiene su conyuge: ", "Ejemplo: Si tiene 26 años, solamente ingrese 26");
var hijos = prompt("¿Tiene hijos?", "SI/NO");
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");*/

//Calcular edad
var anios = anioActual +1900 - anioNacimiento;
if (mesActual < mesNacimiento){
	anios--;
}if ((mesNacimiento == mesActual) && (diaActual < diaNacimiento)){
	anios--;
}
//Cargos
comision = precioBase * 0.30; 
var recargos = 0;	
var edad = anios;
if (edad < 18){
	console.log("Eres menor de edad, no te puedes asegurar")
}if (edad >= 21 && edad < 25){
	recargos = precioBase * 0.01;
	console.log(edad);
	console.log(recargos);
}if (edad >= 25 && edad < 30){
	recargos = precioBase * 0.02;
	console.log(edad);
	console.log(recargos);
}if (edad >= 30 && edad < 40){
	recargos = precioBase * 0.05;
	console.log(edad);
	console.log(recargos);
}if (edad >= 40 && edad < 50){
	recargos = precioBase * 0.08;
	console.log(edad);
	console.log(recargos);
}if (edad >= 50 && edad <= 65){
	recargos = precioBase * 0.12;
	console.log(edad);
	console.log(recargos);
}if (edad > 65){
	console.log("No se puede asegurar");
}


