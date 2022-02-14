/* Calcula el precio con descuento de un producto */

function calcularPrecioConDescuento(precio, porcentajeDeDescuento) {
	const precioConDescuento = (precio * (100 - porcentajeDeDescuento)) / 100; 
	return precioConDescuento;
}

function onClickBotonParaCalcularDescuento() {
	const inputPrecio = document.getElementById('precio');
	const inputPorcentajeDeDescuento = document.getElementById('porcentaje-descuento');
	const resultado = document.getElementById('resultado');
	if(!inputPrecio.value || !inputPorcentajeDeDescuento.value) {
		resultado.innerHTML = "<p style='color: red;'>"+
		"Por favor ingresa todos los datos</p>"
		return;
	}
	const precioConDescuento = calcularPrecioConDescuento(inputPrecio.value, inputPorcentajeDeDescuento.value);
	resultado.innerText = "El precio con descuento es: " + precioConDescuento;
}
