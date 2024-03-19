
const productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 }
];


function mostrarProductos() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i].nombre} - $${productos[i].precio}`);
    }
}


function comprarProducto() {
    mostrarProductos();
    const productoIndex = parseInt(prompt("Ingrese el número del producto que desea comprar:")) - 1;

    if (productoIndex >= 0 && productoIndex < productos.length) {
        const productoSeleccionado = productos[productoIndex];
        const cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado.nombre} que desea comprar:`));

        if (cantidad > 0 && cantidad <= 10) {
            const total = cantidad * productoSeleccionado.precio;
            console.log(`Usted compró ${cantidad} ${productoSeleccionado.nombre}(s) por un total de $${total}`);
            alert("¡Gracias por su compra!");
        } else {
            console.log("Cantidad inválida. Debe ser un número entre 1 y 10.");
        }
    } else {
        console.log("Opción inválida. Por favor, seleccione un número de producto válido.");
    }
}


function tienda() {
    console.log("¡Bienvenido a la tienda!");
    const realizarCompra = confirm("¿Desea realizar una compra?");
    if (realizarCompra) {
        comprarProducto();
    } else {
        console.log("Gracias por visitarnos. ¡Hasta luego!");
    }
}


tienda();
