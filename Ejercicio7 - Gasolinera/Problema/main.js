var gasolina = {
	cantidad: 0,
	cantidadLitros:0,
}
var i = 1;
var suma = 0;
gasolina.cantidad = parseInt(prompt("Escribe la cantidad total de litross que hay en la gasolinería"));
while(suma<gasolina.cantidad){
	gasolina.cantidadLitros = parseInt(prompt("Escribe la cantidad total de litros "+i+" que vas a sacar"));
	suma+=gasolina.cantidadLitros;
	document.write("<br>"+"Le quedan " + (gasolina.cantidad - suma) + " litros.");
	i++
}
if(suma>=gasolina.cantidad) {
	alert(" Se han consumido los "+ gasolina.cantidad + " litros de gasolina.");
}