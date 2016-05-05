var IMC = {
	peso: 0,
	estatura: 0,
	IMC: function() {
		return this.peso/(this.estatura*this.estatura);
	}
}
IMC.peso = Number(prompt("Escribe tu peso en Kg"));
document.write("<br> Tu peso es: " + IMC.peso);
document.write("<br>****************");
IMC.estatura = Number(prompt("Escribe tu estatura en Cm"));
document.write("<br> Tu estatura es: " + IMC.estatura);
document.write("<br>****************");
document.write("<br> Tu IMC es: " + IMC.IMC());
document.write("<br>****************");