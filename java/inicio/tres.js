
function xor(a, b) {
    return a !== b
}
const t1 = xor(true, false);
const t2 = xor(false, true);
console.log(t1)
console.log(t2)

//1.Copy Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log.
const cubo = (a) => {
    return a * a;
}
const resu = (cubo(5))
console.log(resu)

//Crear y llamar a una función flecha que recibe la velocidad en Km/hora y la devuelva en en metros/hora. Recoger el valor devuelto y mostrarlo con un console.log.
const velo = (kmhora) => kmhora * 1000;
const kmhora = velo(5);
console.log(kmhora)

//Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área.
// Recoger el valor devuelto y mostrarlo con un console.log.
// Cuando una función recibe varios parámetros, estos irán separados por coma.
const calculateArea = (width, height) => {
    return width * height;
}
const resul = calculateArea(4, 5)
console.log(resul)

//Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.
const longitud = (nombre) => nombre.length
const resultado = longitud("Lorena")
console.log(resultado)

//Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.
const devuelvePrimeraLetra = (nose) => nose.charAt(0)
const res = devuelvePrimeraLetra("Coche")
console.log(res)

//Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.
const devuelveUltimaLetra = (ultima) => ultima.slice(-1)
const ult = devuelveUltimaLetra("Aguas")
console.log(ult)

//Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.
const devuelveEnesimaLetra = (palab, num) => palab[num]
const mini = devuelveEnesimaLetra("Impresora", 0)
console.log(mini)

// Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.
const aloha = (pala) => pala.substring(3, 7)
const alaa = aloha("wonderful day")
console.log(alaa)

//Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga. En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.
const devuelveMasLarga = (txt, txt2) => txt.length >= txt2.length ? txt : txt2
const resuuu = devuelveMasLarga("Maxi", "Daria")
console.log(resuuu)

//Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. En caso la longitud de la cadena más larga coincida con la longitud de alguna otra cadena, devolveremos el texto Hay al menos dos cadenas iguales.
const devuelveMasLarga2 = (txtt, txtt2, txtt3) => {
    if (txtt.length > txtt2.length && txtt.length > txtt3.length) {
        return txtt;
    }
    else if (txtt2.length > txtt.length && txtt2.length > txtt3.length) {
        return txtt2;
    }
    else if (txtt3.length > txtt.length && txtt3.length > txtt2.length) {
        return txtt3;
    }
    else {
        return "Hay al menos dos cadenas iguales"
    }
}
const muestra = devuelveMasLarga2("Ahmeed", "Adamu", "Mohaam")
console.log(muestra)

//Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto.Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.
const generarNombre = (a1, a2, a3) => {
    if (a1.length < 5 || a2.length < 5 || a3.length < 5) {
        return "error"
    }
    else {
        return a1.substring(0, 3) + a2.substring(0, 3) + a3.substring(0, 3)
    }
}
const nombree = generarNombre("Epson", "Matee", "Ordenador")
console.log(nombree)