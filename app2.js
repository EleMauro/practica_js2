function registrarCompras() {
    alert("Bienvenido a la Tienda Virtual");

    let compras = [];
    let continuar = true;

    while (continuar) {
        let producto = prompt("Ingrese el nombre del producto:");
       

        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        while (isNaN(precio) || precio <= 0) {
            precio = parseFloat(prompt("Precio inválido. Ingrese un número mayor a 0:"));
        }

        let cantidad = parseInt(prompt("Ingrese la cantidad:"));
        while (isNaN(cantidad) || cantidad <= 0) {
            cantidad = parseInt(prompt("Cantidad inválida. Ingrese un número mayor a 0:"));
        }

        let subtotal = precio * cantidad;

        compras.push({
            producto: producto,
            precio: precio,
            cantidad: cantidad,
            subtotal: subtotal
        });

        continuar = confirm("¿Desea agregar otro producto?");
    }

   
    let listado = "Productos seleccionados:\n\n";
    compras.forEach((item, index) => {
        listado += `${index + 1}. ${item.producto} - Cantidad: ${item.cantidad}, Precio unitario: $${item.precio.toFixed(2)}, Subtotal: $${item.subtotal.toFixed(2)}\n`;
    });

 
    let total = compras.reduce((acum, item) => acum + item.subtotal, 0);
    listado += `\nTotal a pagar: $${total.toFixed(2)}`;

    console.log(listado);
}


registrarCompras();
