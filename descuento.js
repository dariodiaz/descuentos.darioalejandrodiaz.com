/* Calcula el precio con descuento de un producto */

function calcularPrecioConDescuento(precio, porcentajeDeDescuento) {
	const precioConDescuento = (precio * (100 - porcentajeDeDescuento)) / 100; 
	return precioConDescuento;
}

function onClickBotonParaCalcularDescuento() {
	const inputPrecio = document.getElementById('precio');
	const inputPorcentajeDeDescuento = document.getElementById('porcentaje-descuento');
	const precioConDescuento = calcularPrecioConDescuento(inputPrecio.value, inputPorcentajeDeDescuento.value);
	const resultado = document.getElementById('resultado');
	resultado.innerText = "El precio con descuento es: " + precioConDescuento;
}
