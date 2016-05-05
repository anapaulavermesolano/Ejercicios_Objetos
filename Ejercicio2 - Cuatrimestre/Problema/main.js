// function cuatrimestre () {  
// 	var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
// 	var nombreDelMes= prompt("Escibe el nombre del mes: ").toLowerCase ();
// 	for(var i = 0; i<12; i++) {
// 		if(nombreDelMes===meses[i]) {
// 			if(i<4) {
// 				alert("Usted se encuentra en el primer CUATRIMESTRE del año");
// 			}else if(i<8) {
// 				alert("Usted se encuentra en el segundo CUATRIMESTRE del año");
// 			}else {
// 				alert("Usted se encuentra en el tercer CUATRIMESTRE del año");
// 			}
// 		}
// 	}
	
// }cuatrimestre ();
var meses= [{
	nombre: "enero",
	cuatrimestre: 1,
},
	{
	nombre: "febrero",
	cuatrimestre: 1,
},
	{
	nombre: "marzo",
	cuatrimestre: 1,
},
	{
	nombre: "abril",
	cuatrimestre: 2,
},
	{
	nombre: "mayo",
	cuatrimestre: 2,
},
	{
	nombre: "junio",
	cuatrimestre: 2,
},
	{
	nombre: "julio",
	cuatrimestre: 2,
},
	{
	nombre: "agosto",
	cuatrimestre: 3,
},
	{
	nombre: "septiembre",
	cuatrimestre: 3,
},
	{
	nombre: "octubre",
	cuatrimestre: 3,
},
	{
	nombre: "noviembre",
	cuatrimestre: 3,
},
	{
	nombre: "diciembre",
	cuatrimestre: 3,
},]
var nombreDelMes= prompt("Escibe el nombre del mes: ").toLowerCase ();
for(var i = 0; i<12; i++) {
	if(nombreDelMes===meses[i].nombre) {
		alert("Usted se encuentra en el " +meses[i].cuatrimestre+ " CUATRIMESTRE del año");
	}
}