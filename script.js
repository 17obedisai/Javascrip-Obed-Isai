function calcularDescuento() {
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento = precio * 0.25;
    let precioFinal = precio - descuento;
    document.getElementById("resultado1").innerText = `Precio final: $${precioFinal.toFixed(2)}`;
}

function calcularInteres() {
    let capital = parseFloat(document.getElementById("capital").value);
    let ganancia = capital * 0.02;
    let total = capital + ganancia;
    document.getElementById("resultado2").innerText = `Monto final después de un mes: $${total.toFixed(2)}`;
}

function calcularCalificacion() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let examen = parseFloat(document.getElementById("examen").value);
    let trabajo = parseFloat(document.getElementById("trabajo").value);
    let definitiva = (n1 + n2 + n3) / 3 * 0.55 + examen * 0.3 + trabajo * 0.15;
    document.getElementById("resultado3").innerText = `Calificación final: ${definitiva.toFixed(2)}`;
}

function calcularPrecioVenta() {
    let costo = parseFloat(document.getElementById("costo").value);
    let precioVenta = costo * 1.30;
    document.getElementById("resultado4").innerText = `Precio de venta: $${precioVenta.toFixed(2)}`;
}

function calcularTaxi() {
    let km = parseFloat(document.getElementById("km").value);
    let min = parseFloat(document.getElementById("min").value);
    let tarifa = km * 1000 + min * 200;
    document.getElementById("resultado5").innerText = `Tarifa total: $${tarifa.toFixed(2)}`;
}

function calcularCuadrado() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    document.getElementById("resultado6").innerText = `Cuadrados: ${num1 ** 2}, ${num2 ** 2}, ${num3 ** 2}`;
}

function calcularPresupuesto() {
    let presupuesto = parseFloat(document.getElementById("presupuesto").value);
    let ginecologia = presupuesto * 0.40;
    let traumatologia = presupuesto * 0.30;
    let pediatria = presupuesto * 0.30;
    document.getElementById("resultado7").innerText = `Ginecología: $${ginecologia.toFixed(2)}, Traumatología: $${traumatologia.toFixed(2)}, Pediatría: $${pediatria.toFixed(2)}`;
}

function calcularInversion() {
    let inv1 = parseFloat(document.getElementById("inv1").value);
    let inv2 = parseFloat(document.getElementById("inv2").value);
    let inv3 = parseFloat(document.getElementById("inv3").value);
    let total = inv1 + inv2 + inv3;
    let p1 = (inv1 / total) * 100;
    let p2 = (inv2 / total) * 100;
    let p3 = (inv3 / total) * 100;
    document.getElementById("resultado9").innerText = `Porcentajes: ${p1.toFixed(2)}%, ${p2.toFixed(2)}%, ${p3.toFixed(2)}%`;
}

function sumar() {
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    document.getElementById("resultado10").innerText = `Suma: ${a + b}`;
}

function restar() {
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    document.getElementById("resultado10").innerText = `Resta: ${a - b}`;
}

function multiplicar() {
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    document.getElementById("resultado10").innerText = `Multiplicación: ${a * b}`;
}

function dividir() {
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    if (b !== 0) {
        document.getElementById("resultado10").innerText = `División: ${a / b}`;
    } else {
        document.getElementById("resultado10").innerText = "No se puede dividir por cero";
    }
}
