var contactos = [];
var x = 0;
var y = 0;
var cantidad = Number(prompt("Escriba la cantidad de personas que quiere contactar"));
for(var i = 0; i<cantidad; i++) {
	var contacto = {};
	contacto.nombre=prompt("Escribe el nombre de la " + (i+1) + " persona.") ;
	contacto.numero = parseInt(prompt("Escribe el numero de la " + (i+1) + " persona."));
	contactos.push(contacto);
	document.write("<br>Nombre: "+ contacto.nombre);
	document.write("<br>Número: "+ contacto.numero);
	document.write("<br>=====================");
	x += 1;
}
var telefono = parseInt(prompt("Ecrisbe el numero de telefono"));
for(var k = 0; k<x; k++ ) {
	if(contactos[k].numero===telefono) {
		alert("El contacto del numero es: "+ contactos[k].nombre);
	}
	else {
		y+=1;
	}
}
if(y===x) {
	alert("El numero ingresado no esta registrado");
}