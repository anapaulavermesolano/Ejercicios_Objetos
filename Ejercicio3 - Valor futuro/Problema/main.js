var Inversion = {
	valor: 0,
	tasa: 0,
	periodo: 0,
	valor_futuro: function() {
		return this.valor*Math.pow(1+this.tasa/100, this.periodo);
	}
}
Inversion.valor= parseInt(prompt("Escriba el valor de la inversión"));
document.write("<br>El valor ingresado es: "+ Inversion.valor);
document.write("<br>======================================")
Inversion.tasa= Number(prompt("Escriba la tasa de la inversión"));
document.write("<br>La tasa ingresada es: " + Inversion.tasa);
document.write("<br>======================================")
Inversion.periodo= parseInt(prompt("Escriba el periodo de la inversión"));
document.write("<br>El periodo ingresado es: " + Inversion.periodo);
document.write("<br>======================================")
document.write("<br>El resultado es: "+ Inversion.valor_futuro());


// function Inversión() {
// 	var valor= parseInt(prompt("Escriba el valor de la inversión"));
// 	document.write("<br>El valor ingresado es: "+ valor);
// 	document.write("<br>======================================")
// 	var tasa= Number(prompt("Escriba la tasa de la inversión"));
// 	document.write("<br>La tasa ingresada es: " + tasa);
// 	document.write("<br>======================================")
// 	var periodo= parseInt(prompt("Escriba el periodo de la inversión"));
// 	document.write("<br>El periodo ingresado es: " + periodo);
// 	document.write("<br>======================================")
// 	var valor_futuro= valor*Math.pow(1+tasa/100, periodo);
// 	document.write("<br>El resultado es: "+ valor_futuro);
// }Inversión();