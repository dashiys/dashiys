const pizarras = ["Daria", "David", "Pablo", "Ana", "José"];
pizarras.forEach(pizarra => console.log("Conozco a alguien llamado " + pizarra));

const numeros = [1, 9, 3, 8, 5, 7];
numeros.forEach(numero => console.log(numero * 2));

const valores = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos = 0
let negativos = 0
let ceros = 0
valores.forEach(valor => {
    if (valor > 0) {
        positivos++
    }
    else if (valor < 0) {
        negativos++
    }
    else {
        ceros++
    }
});
console.log(positivos)
console.log(negativos)
console.log(ceros)

const val = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let posit = 0
let negat = 0
let positsum = 0
let negatsum = 0
val.forEach(va => {
    if (va > 0) {
        posit++;
        positsum += va;
    }
    else if (va < 0) {
        negat++;
        negatsum += va;
    }
});
console.log(positsum / posit)
console.log(negatsum / negat)
