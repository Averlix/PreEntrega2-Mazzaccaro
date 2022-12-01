//Carrito de compra
const valorLibro = 100;
let carrito = 0;
let cantidad = parseInt(prompt("Ingrese la cantidad de libros a adquirir, valor por unidad $100: "));
let nombreLibro = prompt("Ingrese el nombre del libro: ");

carrito = valorLibro * cantidad;

function compra(carrito, cantidad, nombreLibro){
    alert("El valor total de " + cantidad + " libros de " + nombreLibro + " es de: $" + carrito);
    for(i=0; i<5; i++){
        let opcion = prompt("Desea concretar la compra? SI/NO: ");
        if (opcion.toLowerCase()=="si") {
            alert("Gracias por su compra");
            alert("El monto de $" + carrito + " sera descontado de su cuenta");
            return 0;
        } else if (opcion.toLowerCase()=="no") {
            alert("La compra a sido cancelada");
            alert("El monto de $" + carrito + " no sera descontado de su cuenta");
            return 0;
        } else{
            alert("Opción ingresada incorrecta");
            opcion = 0;
        }
    }
    alert("Se agoto el número de intentos permitidos, vuelva a cargar la página e intente nuevamente.");
}

compra(carrito, cantidad, nombreLibro);