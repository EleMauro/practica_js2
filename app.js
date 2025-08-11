
const reservas = [];

function hacerReserva() {
    alert("Bienvenido al sistema de reservas del restaurante");


    let nombre = prompt("Ingrese su nombre:");

    if (nombre === null || nombre === "") {
        alert("No ingresó un nombre válido. Saliendo del sistema.");
        return;
    }

    console.log(`Nombre ingresado: ${nombre}`);


    let continuar = confirm("¿Desea hacer una reserva?");

    while (continuar) {
        let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));


        if (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
            alert("Cantidad no válida. Intente nuevamente.");
            continue;
        }


        if (cantidadPersonas > 6) {
            alert("No se permiten más de 6 personas por reserva.");
            continue;
        }

        let hora = prompt("Ingrese la hora (solo números, máximo 4 dígitos):");

        while (!/^\d{4}$/.test(hora)) {
            alert("Hora inválida. Debe ingresar solo números y máximo 4 dígitos.");
            hora = prompt("Ingrese la hora (solo números, máximo 4 dígitos):");
        }


        let reserva = {
            nombre: nombre,
            cantidadPersonas: cantidadPersonas,
            hora: hora
        };


        reservas.push(reserva);

        console.log("Reserva agregada:", reserva);


        continuar = confirm("¿Desea hacer otra reserva?");
    }

    console.log("Listado completo de reservas:");
    reservas.forEach((reserva, i) => {
        console.log(`${i + 1}. ${reserva.nombre} - ${reserva.cantidadPersonas} personas - ${reserva.hora}`);
    });
}


hacerReserva();

