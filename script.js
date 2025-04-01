// function calcularDescuento() {
//     let precio = parseFloat(document.getElementById("precio").value);
//     let descuento = precio * 0.25;
//     let precioFinal = precio - descuento;
//     document.getElementById("resultado1").innerText = `Precio final: $${precioFinal.toFixed(2)}`;
// }

// function calcularInteres() {
//     let capital = parseFloat(document.getElementById("capital").value);
//     let ganancia = capital * 0.02;
//     let total = capital + ganancia;
//     document.getElementById("resultado2").innerText = `Monto final después de un mes: $${total.toFixed(2)}`;
// }

// function calcularCalificacion() {
//     let n1 = parseFloat(document.getElementById("nota1").value);
//     let n2 = parseFloat(document.getElementById("nota2").value);
//     let n3 = parseFloat(document.getElementById("nota3").value);
//     let examen = parseFloat(document.getElementById("examen").value);
//     let trabajo = parseFloat(document.getElementById("trabajo").value);
//     let definitiva = (n1 + n2 + n3) / 3 * 0.55 + examen * 0.3 + trabajo * 0.15;
//     document.getElementById("resultado3").innerText = `Calificación final: ${definitiva.toFixed(2)}`;
// }

// function calcularPrecioVenta() {
//     let costo = parseFloat(document.getElementById("costo").value);
//     let precioVenta = costo * 1.30;
//     document.getElementById("resultado4").innerText = `Precio de venta: $${precioVenta.toFixed(2)}`;
// }

// function calcularTaxi() {
//     let km = parseFloat(document.getElementById("km").value);
//     let min = parseFloat(document.getElementById("min").value);
//     let tarifa = km * 1000 + min * 200;
//     document.getElementById("resultado5").innerText = `Tarifa total: $${tarifa.toFixed(2)}`;
// }

// function calcularCuadrado() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let num3 = parseFloat(document.getElementById("num3").value);
//     document.getElementById("resultado6").innerText = `Cuadrados: ${num1 ** 2}, ${num2 ** 2}, ${num3 ** 2}`;
// }

// function calcularPresupuesto() {
//     let presupuesto = parseFloat(document.getElementById("presupuesto").value);
//     let ginecologia = presupuesto * 0.40;
//     let traumatologia = presupuesto * 0.30;
//     let pediatria = presupuesto * 0.30;
//     document.getElementById("resultado7").innerText = `Ginecología: $${ginecologia.toFixed(2)}, Traumatología: $${traumatologia.toFixed(2)}, Pediatría: $${pediatria.toFixed(2)}`;
// }

// function calcularInversion() {
//     let inv1 = parseFloat(document.getElementById("inv1").value);
//     let inv2 = parseFloat(document.getElementById("inv2").value);
//     let inv3 = parseFloat(document.getElementById("inv3").value);
//     let total = inv1 + inv2 + inv3;
//     let p1 = (inv1 / total) * 100;
//     let p2 = (inv2 / total) * 100;
//     let p3 = (inv3 / total) * 100;
//     document.getElementById("resultado9").innerText = `Porcentajes: ${p1.toFixed(2)}%, ${p2.toFixed(2)}%, ${p3.toFixed(2)}%`;
// }

// function sumar() {
//     let a = parseFloat(document.getElementById("numA").value);
//     let b = parseFloat(document.getElementById("numB").value);
//     document.getElementById("resultado10").innerText = `Suma: ${a + b}`;
// }

// function restar() {
//     let a = parseFloat(document.getElementById("numA").value);
//     let b = parseFloat(document.getElementById("numB").value);
//     document.getElementById("resultado10").innerText = `Resta: ${a - b}`;
// }

// function multiplicar() {
//     let a = parseFloat(document.getElementById("numA").value);
//     let b = parseFloat(document.getElementById("numB").value);
//     document.getElementById("resultado10").innerText = `Multiplicación: ${a * b}`;
// }

// function dividir() {
//     let a = parseFloat(document.getElementById("numA").value);
//     let b = parseFloat(document.getElementById("numB").value);
//     if (b !== 0) {
//         document.getElementById("resultado10").innerText = `División: ${a / b}`;
//     } else {
//         document.getElementById("resultado10").innerText = "No se puede dividir por cero";
//     }
// }

//Estructuras de controls
//Ejercicio 1: declarar dos variables que una sea el nombre y la otra edad

// let nombre = prompt("ingrese el nombre")
// let edad= parseInt(prompt("ingrese su edad"))

// if (edad >=18) {
//     alert("Hola:" + nombre + " eres mayor de edad");
// }
// else(
//     alert("Hola" + nombre + " eres menor de edad")
// )
// //el usuario digite nombre y edad con la siguete estructura de verificación

// 1 a 18 años es joven
// 19 a 40 años es adulto
// 41 a 60 años es maduro
// 61 en adelante es anciano

// let nombre = prompt ("Cual es tu Nombre?")
// let edad = parseInt (prompt ("cuantos años tienes?"))

// if (edad >= 1  edad <= 18){
//     alert ("hola" + nombre + " Eres una persona joven");
// }else

//CICLO WHILE
//DECLARAR UNA VARIABLE NUMERICA QUE MUESTRE LA CUENTA REGRESIVAAL LLEGAR A 0

// // iniciamos la variable fuera del bucle
// let cuentaAtras = 10

// // mientras la cuenta atrás sea mayor que 0
// while (cuentaAtras > 0) {
//   // mostramos el valor de la cuenta atrás en cada iteración
//     console.log(cuentaAtras)
//   // restamos 1 a la cuenta atrás
//     cuentaAtras = cuentaAtras - 1

//     if (cuentaAtras === 5) {
//         break
// }

// console.log('¡Despegue! 🚀')let nombre = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 1 && edad <= 18) {
//     alert(`Hola ${nombre}, eres una persona joven`);
// } else if (edad >= 19 && edad <= 40) {
//     alert(`Hola ${nombre}, eres un adulto`);
// } else if (edad >= 41 && edad <= 60) {
//     alert(`Hola ${nombre}, eres una persona madura`);
// } else if (edad >= 61) {
//     alert(`Hola ${nombre}, eres una persona anciana`);
// } else {
//     alert("Edad no válida");
// }

// let cuentaAtras = 10;

// while (cuentaAtras > 0) {
//     console.log(cuentaAtras);
//     cuentaAtras -= 1;

//     if (cuentaAtras === 5) {
//         break;
//     }
// }

// console.log('¡Despegue! 🚀');


// let persona = 0

// do{
//     let personas = (prompt("cual es tu nombre?"));

//     let edad = parseInt(prompt("cual es tu edad?"));

//     if(edad >=18){
//         alert(nombre + "es mayor de edad");
//     }else{
//         alert(nombre + "es menor de edad");
//     }
//     persona++;
// }while(contador <5)
//     alert("se registraron " + persona + " personas");
//     alert("fin del programa");
// }
//     }


    //imprimir las tablas de multiplicar que el usuario ingrese hasta el numero 10, utilizando el ciclo for y mostrar en pantallla la siguiente sintaxis

// 5x1 = 5
// 5x2= 10
// 5x3=15
// 5x4=20

// let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar (del 1 al 10):"));

// if (!isNaN(numero) && numero > 0) {

//     document.write(`<h2>Tabla del ${numero}</h2>`);
//     let resultadoTexto = `Tabla del ${numero}:\n`;

//     for (let i = 1; i <= 10; i++) {
//         let resultado = numero * i;
//         document.write(`${numero} x ${i} = ${resultado} <br>`);
//         resultadoTexto += `${numero} x ${i} = ${resultado}\n`;
//     }

//     alert(resultadoTexto);
// } else {
//     alert("Por favor, ingresa un número válido.");
//     document.write("<p>Debes ingresar un número válido.</p>");
// }

// 1. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

// 2. verifica si un número es positivo, negativo o cero e imprime un mensaje

// 3. verificaa si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// 4. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad


// let finde=false
// if {
//     (finde=false)
//     console.log("puedes salvar al mundo")
// }


// else{
//     console.log("sigue descansando")
// }

//realizar un programa que determine en que dia de la semana corresponde hoy o utilizando la funcion prompt
/*
const dia = new Date().getDate()

switch (dia) {
    
    case 1:
    console.log("¡Hoy es lunes! 😢")
    break

    case 2:
        console.log("Hoy es martes")
        break

    case 3:
        console.log("hoy es miercoles")
        break
    
    case 4:
        console.log("hoy es jueves")
        break

    case 5:
        console.log("hoy es viernessss")
        break

    case 6:
        console.log("hoy es sabado")
        break

    case 0:
        console.log("hoy es domingo")
        break

default:
    console.log("No es lunes, YAY! 🚀")
    break
}

*/

// // 1. Programa que dada la edad de una persona indique si es mayor o menor de edad.
// // Se considera mayor de edad a partir de los 18 años.
// const edad = parseInt(prompt("Ingresa tu edad:")); 
// if (edad >= 18) {
//     alert("Eres mayor de edad.");
// } else {
//     alert("Eres menor de edad.");
// }

// // 3. Dado dos números A y B, determinar si A es mayor, menor o igual que B.
// const A = parseFloat(prompt("Ingresa el primer número (A):"));
// const B = parseFloat(prompt("Ingresa el segundo número (B):"));
// if (A > B) {
//     alert("A es mayor que B.");
// } else if (A < B) {
//     alert("A es menor que B.");
// } else {
//     alert("A y B son iguales.");
// }

// // 5. Dado el peso de una persona:
// //    a) Si el peso es menor o igual a 40 Kg. Mostrar: "Persona Baja de Peso".
// //    b) Si el peso es entre 41 y 70 Kg. Mostrar: "Persona peso promedio".
// //    c) Si el peso es mayor a 71 Kg. Mostrar: "Persona con sobrepeso".
// const peso = parseFloat(prompt("Ingresa tu peso en kg:"));
// if (peso <= 40) {
//     alert("Persona Baja de Peso.");
// } else if (peso >= 41 && peso <= 70) {
//     alert("Persona peso promedio.");
// } else {
//     alert("Persona con sobrepeso.");
// }

// // 7. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000,
// //    a los demás se les hace un 5% de descuento. ¿Cuál será la cantidad que pagará una persona?
// const compra = parseFloat(prompt("Ingresa el valor de la compra:"));
// let totalPagar;
// if (compra > 1000) {
//     totalPagar = compra - (compra * 0.20); // Descuento del 20%
// } else {
//     totalPagar = compra - (compra * 0.05); // Descuento del 5%
// }
// alert(`El total a pagar es: $${totalPagar.toFixed(2)}`);

// // 9. Programa que lea los nombres y edades de dos personas e imprima cuál de ellas tiene más edad.
// const nombre1 = prompt("Ingresa el nombre de la primera persona:");
// const edad1 = parseInt(prompt(`Ingresa la edad de ${nombre1}:`));
// const nombre2 = prompt("Ingresa el nombre de la segunda persona:");
// const edad2 = parseInt(prompt(`Ingresa la edad de ${nombre2}:`));
// if (edad1 > edad2) {
//     alert(`${nombre1} es mayor que ${nombre2}.`);
// } else if (edad1 < edad2) {
//     alert(`${nombre2} es mayor que ${nombre1}.`);
// } else {
//     alert(`${nombre1} y ${nombre2} tienen la misma edad.`);
// }

// // 13. Escribe un programa que determine si un número ingresado por el usuario es par o impar.
// const numero = parseInt(prompt("Ingresa un número:"));
// if (numero % 2 === 0) {
//     alert("El número es par.");
// } else {
//     alert("El número es impar.");
// }

// // 15. Crea un programa que solicite un número y verifique si es positivo, negativo o igual a cero.
// const num = parseFloat(prompt("Ingresa un número:"));
// if (num > 0) {
//     alert("El número es positivo.");
// } else if (num < 0) {
//     alert("El número es negativo.");
// } else {
//     alert("El número es cero.");
// }

// // 17. Escribe un programa que permita al usuario seleccionar una figura geométrica 
// //     (triángulo o cuadrado) y luego calcule el área de esa figura ingresando los datos necesarios.
// const figura = prompt("Elige una figura (triángulo o cuadrado):").toLowerCase();
// if (figura === "triángulo") {
//     const base = parseFloat(prompt("Ingresa la base del triángulo:"));
//     const altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
//     const area = (base * altura) / 2;
//     alert(`El área del triángulo es: ${area}`);
// } else if (figura === "cuadrado") {
//     const lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
//     const area = lado * lado;
//     alert(`El área del cuadrado es: ${area}`);
// } else {
//     alert("Figura no válida.");
// }

// // 19. Diseña un programa que solicite el nombre de un usuario y su contraseña.
// //     Si el nombre es "admin" y la contraseña es "12345", muestra un mensaje de acceso concedido;
// //     de lo contrario, muestra un mensaje de acceso denegado.
// const usuario = prompt("Ingresa tu nombre de usuario:");
// const contraseña = prompt("Ingresa tu contraseña:");
// if (usuario === "admin" && contraseña === "12345") {
//     alert("Acceso concedido.");
// } else {
//     alert("Acceso denegado.");
// }


// const edad= parseInt(prompt("Ingresa tu edad:"));

// if (edad >= 18) {
//     alert("puedes votar.")
// }
// else {
//     const anosFaltantes = 18 - edad;
//     alert(`Aún no puedes votar, te faltan ${anosFaltantes} años para poder votar.`);
// }
/*
//FUNCIONES
function saludar (){
    alert("Hola probando las funciones")
}
saludar
*/

// function sumar (){
//     return 2+2
// }
// const resultado = sumar()
// alert(sumar())

// function getRandomNumer() {
//     const random = Math.random()

//     const multiplied = random * 10

//     const rounded = Math.floor(multiplied)

//     const result = rounded + 1

//     return result
// }

// console.log("Probando node.js");

// // Funciones con function express
// const suma = function(a, b) {
//     console.log("Resultado de la suma:", a + b);
//     return a + b;
// };

// const resta = function(a, b) {
//     console.log("Resultado de la resta:", a - b);
//     return a - b;
// };

// const multiplicacion = function(a, b) {
//     console.log("Resultado de la multiplicación:", a * b);
//     return a * b;
// };

// const division = function(a, b) {
//     if (b === 0) {
//         console.log("Error: División por cero");
//         return 'Error: División por cero';
//     }
//     console.log("Resultado de la división:", a / b);
//     return a / b;
// };

// // Funciones de flecha
// const sumaFlecha = (a, b) => {
//     console.log("Resultado de la suma (flecha):", a + b);
//     return a + b;
// };

// const restaFlecha = (a, b) => {
//     console.log("Resultado de la resta (flecha):", a - b);
//     return a - b;
// };

// const multiplicacionFlecha = (a, b) => {
//     console.log("Resultado de la multiplicación (flecha):", a * b);
//     return a * b;
// };

// const divisionFlecha = (a, b) => {
//     if (b === 0) {
//         console.log("Error: División por cero");
//         return 'Error: División por cero';
//     }
//     console.log("Resultado de la división (flecha):", a / b);
//     return a / b;
// };

// // Ejecución de las funciones
// suma(10, 5);
// resta(10, 5);
// multiplicacion(10, 5);
// division(10, 5);

// sumaFlecha(10, 5);
// restaFlecha(10, 5);
// multiplicacionFlecha(10, 5);
// divisionFlecha(10, 5);



// function cuentaAtras(numero) {
//     // Condición base: Si el número que recibe es
//     // menor de 0 entonces salimos de la función
//     if (numero < 0) { return }

//     // Si el número era mayor o igual a 0, lo mostramos
//     console.log(numero)

//     // Y llamamos a la función con el número anterior
//     cuentaAtras(numero - 1)
// }

// cuentaAtras(5)

function suma(n) {
    if (n === 0 || n === 1) {
        console.log(`suma(${n}) = ${n} (caso base)`);
        return n;
    } else {
      const resultadoParcial = suma(n - 1); // Llamada recursiva
        const resultadoFinal = n + resultadoParcial;
        console.log(`suma(${n}) = ${n} + suma(${n - 1}) = ${resultadoFinal}`);
        return resultadoFinal;
    }
}
console.log("Resultado final:", suma(3));

function suma(n) {
    if (n === 1) return 1; // Caso base: Si es 1, devuelve 1
    return n + suma(n - 1); // Si no, suma n + el resultado de la función con n-1
}

    console.log(suma(3)); 