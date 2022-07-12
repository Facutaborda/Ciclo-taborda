let compra = Number(prompt("Ingrese el numero de productos que desea abonar"));
let acumulador = 0;
let descuentoEfectivo = 10;


for (let i = 1; i <= compra; i++) {

    let producto1 = Number(prompt("Ingrese el monto del producto n° " + i))
    acumulador = acumulador + producto1
    precioEfectivo = (acumulador * descuentoEfectivo) / 100

}
let medioPago = Number(prompt("Como desea abonar su compra? \n1- Efectivo \n2- Tarjeta"))

if (medioPago == "1" || medioPago == "efectivo") {
    alert("El monto total de su compra es: $" + acumulador + "\nAbonando la factura  con efectivo el monto es: $" + (acumulador - precioEfectivo))

} else {
    alert("El monto total de su compra es: $" + acumulador)
}