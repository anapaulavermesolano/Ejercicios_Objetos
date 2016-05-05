function factura() {
	var factura = {
		"empresa": ["Nombre de la empresa", "Dirección", "Teléfono", "NIF"],
		"cliente": ["Nombre de el cliente", "Dirección", "Teléfono", "NIF"],
		"producto": ["Nombre de producto", "precio", "cantidad"],
		"facturas": ["Tipo de iva", "Forma de pago"]
	};
	var empresa = [];
	var cliente = [];
	var producto = [];
	var facturas = [];
	for(var i =0; i<=factura.empresa.length-1; i++) {
		empresa.push(prompt("Escriba " + factura.empresa[i]+ "." ));
		document.write("<br>"+ factura.empresa[i]+ " : " + empresa[i]);
	}
	document.write("<br>===================================");
	for(var j =0; j<=factura.cliente.length-1; j++) {
		cliente.push(prompt("Escriba " + factura.cliente[j]+ "." ));
		document.write("<br>"+ factura.cliente[j]+ " : " + cliente[j]);
	}
	document.write("<br>===================================");
	for(var a =0; a<=factura.producto.length-1; a++) {
		producto.push(prompt("Escriba " + factura.producto[a]+ "." ));
		document.write("<br>"+ factura.producto[a]+ " : " + producto[a]);
	}
	document.write("<br>===================================");
	for(var x =0; x<=factura.facturas.length-1; x++) {
		facturas.push(prompt("Escriba " + factura.facturas[x]+ "." ));
		document.write("<br>"+ factura.facturas[x]+ " : " + facturas[x]);
	}
	document.write("<br>===================================");
	var resultado = (producto[1])*(producto[2])*(facturas[0]);
	document.write("<br> El importe total de la factura es: " + resultado.toFixed(3));
}factura();