//Cotizador Automático
//Variables
const precioBase = 250;
//Fecha actual
var fecha = new Date();
var anioActual = fecha.getYear();
var mesActual = fecha.getMonth() + 1;;
var diaActual = fecha.getDate();
//Datos Cliente
var nombreCompleto = prompt("Ingrese su nombre completo: ", "Nombres y Apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento: ", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento: ", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento: ", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
//Datos conyuge e hijos
var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
/*var edadConyugue = prompt("Que edad tiene su conyuge: ", "Ejemplo: Si tiene 26 años, solamente ingrese 26");
var hijos = prompt("¿Tiene hijos?", "SI/NO");*/
//var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");

//Calcular edad
var anios = anioActual +1900 - anioNacimiento;
if (mesActual < mesNacimiento){
	anios--;
}if ((mesNacimiento == mesActual) && (diaActual < diaNacimiento)){
	anios--;
}
//Recargos asegurado
comision = precioBase * 0.30; 
var recargos = 0;	
var edad = anios;
if (edad < 18){
	document.write("Eres menor de edad, no te puedes asegurar <br>");
}else if (edad >= 21 && edad < 25){
	recargos = precioBase * 0.01;
	console.log(edad);
	console.log(recargos);
}else if (edad >= 25 && edad < 30){
	recargos = precioBase * 0.02;
	console.log(edad);
	console.log(recargos);
}else if (edad >= 30 && edad < 40){
	recargos = precioBase * 0.05;
	console.log(edad);
	console.log(recargos);
}else if (edad >= 40 && edad < 50){
	recargos = precioBase * 0.08;
	console.log(edad);
	console.log(recargos);
}else if (edad >= 50 && edad <= 65){
	recargos = precioBase * 0.12;
	console.log(edad);
	console.log(recargos);
}else if (edad > 65){
	document.write("No se puede asegurar <br>");
}
//Regargos por conyugue 
if (conyuge === "Si"){
	var diaNacimientoC = prompt("Ingrese el día de nacimiento: ", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
	var mesNacimientoC = prompt("Ingrese el mes de nacimiento: ", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
	var anioNacimientoC = prompt("Ingrese el año de nacimiento: ", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
	var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
	var aniosC = anioActual +1900 - anioNacimientoC;
	if (mesActual < mesNacimientoC){
	aniosC--;
	}if ((mesNacimientoC == mesActual) && (diaActual < diaNacimientoC)){
	aniosC--;
	}console.log(aniosC);
}
var recargosC = 0;
if (aniosC < 30){
	recargosC = precioBase * 0.01;
	console.log(recargosC);
}if (aniosC > 30 && aniosC < 40){
	recargosC = precioBase * 0.02;
	console.log(recargosC);
}if (aniosC > 40 && aniosC < 50){
	recargosC = precioBase * 0.03;
	console.log(recargosC); 
}if (aniosC > 50 && aniosC < 70){
	recargosC = precioBase * 0.05;
	console.log(recargosC);
}
//Recargos por hijos menores de 21
var recargosH = 0;
if (cantidadHijos > 0){
	recargosH = precioBase * cantidadHijos * 0.01;
	console.log(recargosH);
}
var Total = precioBase + recargos + recargosH + recargosC + comision;
document.write("Bienvenido a seguros TK-U <br>");
document.write("Gracias por elegir nuestros servicios " + nombreCompleto + "<br>")
document.write("Precio Base---------------------------Q."+precioBase + "<br>");
document.write("Recargos por edad---------------------Q."+recargos + "<br>");
document.write("Recargos por conyuge------------------Q."+recargosC + "<br>");
document.write("Recargos por hijos menores de 21 años-Q."+recargosH + "<br>");
document.write("Comision------------------------------Q."+comision + "<br>");
document.write("_____________________________________________________________"+ "<br>");
document.write("TOTAL---------------------------------Q."+Total + "<br>");
