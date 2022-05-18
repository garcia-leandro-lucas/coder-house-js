/********************/
/* La idea es hacer una pagina ecommerce de venta de calzados */

const ZAPATILLAS_NIKE = 20000;
const ZAPATILLAS_ADIDAS = 15000;

const COSTO_DE_ENVIO_CABA = 600;
const COSTO_DE_ENVIO_GBA = 900;
const COSTO_DE_ENVIO_INT_GBA = 600;

let seleccion_de_producto = prompt(`Por favor selecciones un producto del carrito de compra:\n A: Zapatillas Nike: $ ${ZAPATILLAS_NIKE} \nB: Zapatillasadiddas: $ ${ZAPATILLAS_ADIDAS}`);
	
let zona_de_envio = prompt("Por favor, seleccione su zona de envío: A: CABA \nB: Gran Buenos Aires\n C: Interior de Buenos Aires\n")

let costo_total = 0;

	switch (zona_de_envio) {
		case 'A':
			alert(`El costo de envío de CABA es de: $ ${COSTO_DE_ENVIO_CABA}`);
	
			if(seleccion_de_producto == "A") {
				costo_total = ZAPATILLAS_NIKE + COSTO_DE_ENVIO_CABA;
			}else {
				costo_total = ZAPATILLAS_ADIDAS + COSTO_DE_ENVIO_CABA;
			}
		break;
	
		case 'B':
			alert(`El costo de envío al Gran Buenos Aires es de: $ ${COSTO_DE_ENVIO_GBA}`);
	
			if(seleccion_de_producto == "A") {
				costo_total = ZAPATILLAS_NIKE + COSTO_DE_ENVIO_GBA;
			}else {
				costo_total = ZAPATILLAS_ADIDAS + COSTO_DE_ENVIO_GBA;
			}
		break;
	
		case 'C':
			alert(`El costo de envío al interior de Buenos Aires es de: $ ${COSTO_DE_ENVIO_INT_GBA}`);
	
			if(seleccion_de_producto == "A") {
				costo_total = ZAPATILLAS_NIKE + COSTO_DE_ENVIO_INT_GBA;
			}else {
				costo_total = ZAPATILLAS_ADIDAS + COSTO_DE_ENVIO_INT_GBA;
			}
		break;
	
		default:
			alert('Lo lamentamos, por el momento no disponemos de esa zona de envío. Por favor, seleccione su zona de envío: A: CABA \nB: Gran Buenos Aires\n C: Interior de Buenos Aires\n');
	}


let mensaje_de_pedido = alert(`Ustedes seleccionó la opción ${seleccion_de_producto} y su zona de envío es: ${zona_de_envio}.`);
let mensaje_de_costo_total = alert("Su total a abonar es:" + costo_total);

alert(mensaje_de_pedido);
alert(mensaje_de_costo_total);



