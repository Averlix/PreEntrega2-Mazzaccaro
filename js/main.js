const libros = [
    {nombre:"viaje al centro de la tierra", autor:"Julio Verne", precio:500},
    {nombre:"elantris", autor:"Brandon Sanderson", precio:700},
    {nombre:"canción de hielo y fuego", autor:"George R. R. Martin", precio:1000},
    {nombre:"el señor de los anillos", autor:"J. R. R. Tolkien", precio:2000},
    {nombre:"la vuelta al mundo en 80 días", autor:"Julio Verne", precio:2000},
    {nombre:"el camino de los reyes", autor:"Brandon Sanderson", precio:3000},
    {nombre:"bestiario", autor:"Julio Cortázar", precio:200},
    {nombre:"el hobbit", autor:"J. R. R. Tolkien", precio:900},
    {nombre:"rayuela", autor:"Julio Cortázar", precio:800},
    {nombre:"mafalda", autor:"Quino", precio:400}
];

function compra(){
    let carrito = 0;
    let opcion = prompt("Desea comprar un libro SI/NO ");
    if(opcion.toLowerCase() == "si"){
        let libro = prompt("Indique el nombre del libro: ");
        let i = 0;
        for(let i = 0; i < libros.length; i++){
            if(libro == libros[i].nombre){
                alert("El libro " + libros[i].nombre.toUpperCase() + " de " + libros[i].autor.toUpperCase() + " cuesta $" + libros[i].precio);
                opcion = prompt("Desea agregarlo al carrito de compra SI/NO ");
                if(opcion.toLowerCase() == "si"){
                    carrito = carrito + libros[i].precio;
                    alert("Se a agregado el monto de $" + carrito + " a su cuenta.");
                    alert("Si compra una copia extra obtendra un 30% de descuento");
                    opcion = prompt("Desea agregar una copia para regalo SI/NO ");
                    if(opcion.toLowerCase() == "si"){
                        carrito = 2 * carrito;
                        carrito = carrito - (carrito * 30 / 100);
                        alert("El monto de $" + carrito + " sera descontado de su cuenta, gracias por su compra.");
                    } else if(opcion.toLowerCase() == "no"){
                        alert("El monto de $" + carrito + " sera descontado de su cuenta, gracias.");
                    } else{
                        alert("Opción incorrecta, porfavor vuelva a cargar la página");
                    }

                } else if(opcion.toLowerCase() == "no"){
                    alert("El monto de $" + libros[i].precio + " no sera descontado de su cuenta.");
                } else{
                    alert("Opción incorrecta, porfavor vuelva a cargar la página.");
                }
            }
            i += 1;
        }
    } else if(opcion.toLowerCase() == "no"){
        alert("Gracias por visitarnos.");
    } else{
        alert("Opción ingresada incorrecta, porfavor vuelva a cargar la página.");
    }
}

compra();