var circulo = {
	radio: 0,
	area: function() {
		return Math.PI*Math.pow(this.radio,2);
	},
	longitud: function() {
		 return  2*Math.PI*this.radio;
	}
}
circulo.radio = Number(prompt("Escribe el redio del circulo"));
document.write("<br>El area del circulo es : " + circulo.area().toFixed(2));
document.write("<br>La longitud del circulo es : " + circulo.longitud().toFixed(2));
