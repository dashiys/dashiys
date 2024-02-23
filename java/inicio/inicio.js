const txt1 = 'Este es el principio'
const txt2 = 'este es el final.'
const txt3 = txt1 + ' ' + txt2
console.log(txt3)

const euros = 7;
const dolares = euros * 2
console.log(dolares);

const precio = 100;
const precioConIva = precio + 0.21 * precio
console.log(precioConIva);

const ancho = 4
const alto = 7
const area = ancho * alto
console.log(area)

const centigrados = 20;
const fahrenheit = centigrados * 9 / 5 + 32
console.log(fahrenheit);

const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza extraña, indómita';
const resultado = nombre + ' ha pedido una caja de ' + material + ' con unas dimensiones ' + dimensiones + '. ' + comentario + '.'
console.log(resultado)

let myVaar = 87;
myVaar++
console.log(myVaar);

let myVar = 11;
myVar--
console.log(myVar);

let x = 3;
x++;
x = x * 2;
x--;
console.log(x);

const dato1 = 10;
const dato2 = 10;
if (dato1 === dato2) {
    console.log('exito');
}

if (10 == 10) {
    console.log('You got a true!')
} else {
    console.log('You got a false!')
}

const nota = 7
if (nota > 5) {
    console.log('Aprobado')
} else if (nota == 5) { console.log('Aprobado por los pelos') }
else if (nota < 5) { console.log('Suspendido') }

const i = -5
if (i > 0) {
    console.log('Positivo')
} else if (i < 0) {
    console.log('Negativo')
}

if (i % 2 === 0) {
    console.log('Par')
} else if (i % 2 !== 0) {
    console.log('Impar')
}

if (i % 5 === 0) {
    console.log('Múltiplo de 5')
}
else if (i % 5 !== 0) {
    console.log('No es múltiplo de 5')
}

if (i % 10 === 0) {
    console.log('Múltiplo de 10')
}
else if (i % 10 !== 0) {
    console.log('No es múltiplo de 10')
}
if (i > 100) {
    console.log('Mayor que 100')
}
else if (i < 100) {
    console.log('Menor que 100')
}

const n1 = 3;
const n2 = 7;
const op = "*";
if (op === "+") {
    console.log(n1 + n2)
}
else if (op === "-") {
    console.log(n1 - n2)
}
else if (op === "*") {
    console.log(n1 * n2)
}
else if (op === "/") {
    console.log(n1 / n2)
}

const b = 5;
console.log(b > 0 ? 'Positivo' : 'Negativo');

const e = 2;
console.log(e % 2 === 0 ? 'Par' : 'Impar')

const color = 'rojo';
switch (color) {
    case 'rojo':
        console.log('Has escogido rojo');
        break;
    case 'azul':
        console.log('Has escogido azul');
        break;
    case 'amarillo':
        console.log('Has escogido amarillo');
        break;
    default:
        console.log('No has escogido ningún color de la lista!');
}

const golosina = 'nubes';
switch (golosina) {
    case 'chicle':
        console.log('Has escogido un chicle');
        break;
    case 'gominola':
        console.log('Has escogido una gominola');
        break;
    case 'regaliz':
        console.log('Has escogido un regaliz');
        break;
    default:
        console.log('No has escogido ninguna chuche!');
}
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