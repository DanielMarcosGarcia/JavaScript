// INTERESES DE CUOTAS DEL PRESTAMO //
function interes_cuotas(monto, cuotas) {

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let interes = 0;

    if (monto > 0 && cuotas == 3) {
        interes = monto + (monto * 0.15);
        return interes
    }
    else if (monto > 0 && cuotas == 6) {
        interes = monto + (monto * 0.30);
        return interes
    }
    else if (monto > 0 && cuotas == 12) {
        interes = monto + (monto * 0.60);
        return interes
    }
    else if (monto > 0 && cuotas == 24) {
        interes = monto + (monto * 1.20);
        return interes
    }
    else if (monto > 0 && cuotas == 1) {
        return monto
    }

}

// SI ES SOCIO o NO//
function soy_socio(interes, socio_usuario) {

    if (socio_usuario == "SI") {

        let descuento = interes * 0.05;
        return descuento

    }

    else {

        return 0

    }
}

// DATOS DEL PRESTAMO //
console.log("Bienvenido/a a Prestamos Bitter");

let nombre = "";
let apellido = "";
let socio_usuario = "";
let monto = "";
let DNI = "";

while (monto != "SALIR") {

    nombre = prompt("Nombre: ");
    apellido = prompt("Apellido: ");
    DNI = prompt("DNI: ");
    socio_usuario = prompt("Es socio: SI O NO");
    monto = prompt("Ingresa cuento dinero queres o ingrese SALIR para finalizar");

    if (monto != "SALIR") {

        let cuotas = prompt("En cuantas cuotas: 1, 3, 6, 12 o 24");
        let prestamo_total = interes_cuotas(monto, cuotas);
        let prestamo_desc = soy_socio(prestamo_total, socio_usuario);

        console.log("Datos del prestamo");
        console.log("Su Nombre: ", nombre);
        console.log("Su Apellido : ", apellido);
        console.log("Su DNI: ", DNI);
        console.log("Usted Pidío: ", monto);
        console.log("Ustes es socio: ", socio_usuario);
        console.log("Cuotas: ", cuotas);
        console.log("Descuento por socio: ", prestamo_desc);
        console.log("Total: ", prestamo_total);
        console.log("Monto final: ", prestamo_total - prestamo_desc);
    }

}

