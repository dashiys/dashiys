const nombres = ["Daria", "Pablo", "Lorena", "David", "Ana"]
for (let i = 0; i < nombres.length; i++) {
    console.log("Conozco a alguien llamado " + nombres[i])
}

const toArray = (a, b) => {
    resultado = [a, b]
    console.log(resultado)
}
toArray(5, 9)

const numeros = [1, 9, 3, 8, 5, 7]
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2)
}

const getFirstElement = (a, b) => {
    resultado = [a, b]
    console.log(resultado.slice(0, 1))
}
//clg(resultado[0])
getFirstElement(1, 2);

const setFirstElement = (arr, num) => {
    arr[0] = num
    return arr.reverse()
}
const v = setFirstElement([1, 2], 3);

console.log(v)

const getLastElement = (ar) => {
    return ar[ar.length - 1]
}
const e = getLastElement([1, 2]);
console.log(e)

const valores = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos = 0
let negativos = 0
let ceros = 0
for (let i = 0; i < valores.length; i++) {
    if (valores[i] === 0)
        ceros += 1
    else if (valores[i] < 0)
        negativos += 1
    else if (valores[i] > 0)
        positivos += 1
}

console.log(positivos)
console.log(negativos)
console.log(ceros)


const valor = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivo = 0
let negativo = 0
let posisum = 0
let negsum = 0
for (let i = 0; i < valor.length; i++) {
    if (valor[i] > 0) {
        positivo++;
        posisum += valor[i];
    }
    else if (valor[i] < 0) {
        negativo++;
        negsum += valor[i];
    }
}
const r = posisum / positivo;
const o = negsum / negativo;

console.log(r, o)

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
const myData = arr[2][1];
console.log(myData);
