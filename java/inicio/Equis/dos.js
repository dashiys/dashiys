for (let d = 0; d < 100; d = d + 2) {
    console.log(d);
}

for (let y = 0; y < 100; y++) {
    if (y % 2 === 0) {
        console.log('Par', y)
    }
}

for (let o = 0; o < 20; o++) {
    if (o % 3 && o % 5 === 0) { console.log('FizzBuzz') }
    else if (o % 3 === 0) { console.log('Fizz') }
    else if (o % 5 === 0) { console.log('Buzz') }
    else { console.log(o) }
}

let m = 0;
for (let y = 5; y > 0; y--) {
    m = m + y; //m+=y
    console.log(m)
}

let o = 7
for (let k = 0; k < 9; k++) {
    let result = o * k;
    console.log("7 * " + k + " = " + result)
}


for (let l = 1; l < 10; l++) {
    for (let ñ = 0; ñ < 10; ñ++) {
        let resultt = l * ñ;
        console.log(l + " * " + ñ + " = " + resultt)
    }
}

let valor = 5;
let resu = 0;
while (valor > 0) {
    resu += valor;
    console.log(resu);
    valor--;
}

function controlar(si) {
    if (si == true) {
        console.log('Sí, eso es cierto ');
    }
    else if (si == false) {
        console.log('No, eso es falso');
    }
}
controlar(false);
//Crear una función llamada «hoyQuieroComer» que recibe un parámetro “comida” cuyo valor será «garbanzos».
//Cuando llamemos a la función se mostrará un log indicándonos lo que deseamos comer.
function hoyQuieroComer(comida) {
    console.log('Deseo comer ' + comida + '.')
}
hoyQuieroComer('garbanzos')

//3.Copy Crear una función llamada calcularCubo que recibe un número, calcule su cubo y muestre el resultado por consola. Llamar a la función pasándole el valor 3.
function calcularCubo(recibe) {
    const m = recibe * recibe
    console.log(m)
}
calcularCubo(3)

//Crear una función llamada calcularVelocidad que recibirá la velocidad en Km/hora y la mostrará en metros/hora.
//la función le pasaremos como parámetro de entrada 3 kilómetros / hora y deberíamos visualizar 3000 metros / hora.
function calcularVelocidad(metros) {
    const h = metros * 1000
    console.log(h)
}
calcularVelocidad(3)
//Crear una función llamada calcularArea que recibirá el ancho y el alto de un rectángulo y calculará su area.
//Cuando una función recibe varios parámetros, estos irán separados por coma.
function calculArea(ancho, alto) {
    const area = ancho * alto;
    console.log(area);
}
calculArea(15, 20)
// Crear y llamar a una función que recibe la base y la altura de un triángulo y calcula su área.
function recibe(base, altura) {
    const area = base * altura / 2;
    console.log(area)
}
recibe(50, 24)

function calculaPerimetro(radio) {
    const circ = 2 * Math.PI * radio
    console.log(circ)
}
calculaPerimetro(12)

function calculaArea(radio) {
    const circ = Math.PI * radio
    console.log(circ)
}
calculaArea(60)

//Escribe una función echo que devuelva el valor que recibe como parámetro.
function echo(name) {
    return "hola " + name;
}
const nombre = echo("Greta")
const vario = echo("Co2")
console.log(nombre);
console.log(vario);

function saludar(name) {
    return "Hola " + name + "!";
}
const saludo = saludar("Daria")
const saludos = saludar("Maxi")
console.log(saludo);
console.log(saludos);

function test(val) {
    if (val <= 20 && val >= 10) {
        return "Inside";
    } else {
        return "Outside";
    }
}
const numero = test(5)
console.log(numero)

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
const result = testEqual(13)
console.log(result)

function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Mayor que 5";
    }

    else if (val <= 5) {
        result = "Menor o igual a 5";
    }
    return result;
}
const otra = testElse(9)
console.log(otra)

function testElsee(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }

    else if (val < 5) {
        result = "Smaller than 5";
    }

    else if (val == 5) {
        result = "Equal to 5";
    }
    return result;
}
const igual = testElsee(5)
console.log(igual)