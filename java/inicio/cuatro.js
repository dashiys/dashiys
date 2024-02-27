// Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.
const generarnombre2 = (t1, t2, t3) => {
    if (t1.length < 5 || t2.length < 5 || t3.length < 5) {
        return "error"
    }
    else {
        return t1.slice(-1) + t2.slice(-1) + t3.slice(-1)
    }
}
const resu = generarnombre2("Soles", "Avioneta", "Luxemburgo")
console.log(resu)

//Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.
const generarnombre3 = (a1, a2, a3) => {
    if (a1.length < 5 || a2.length < 5 || a3.length < 5) {
        return "error"
    }
    else {
        return a1.slice(-3) + a2.slice(-3) + a3.slice(-3)
    }
}
const resul = generarnombre3("MontesdeOca", "Pareja", "Arizcun")
console.log(resul)

//Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.
const tieneLetra = (b, l) => {
    if (b.toUpperCase().indexOf(l.toUpperCase()) >= 0) {
        return true
    }
    else {
        return false
    }

}
const resultado = tieneLetra("Ratón", "R")
console.log(resultado)

//Hacer una función crearPalabra que reciba como
//parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida
//tantas veces como indique el número.
const crearPalabra = (le, num) => {
    let palabra = "";
    for (let i = 0; i < num; i++) {
        palabra += le
    }
    return palabra;
}
const p = crearPalabra("M", 7)
console.log(p)

//Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.
const crearPalabrsa = (te, nuum) => {
    let palabrra = "";
    for (let i = 0; i < nuum; i++) {
        palabrra += te
    }
    return palabrra.toUpperCase();
}
const r = crearPalabrsa("t", 7)
console.log(r)

//Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva 
//una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.
const addGuiones = (textamen) => {
    let cadena = ""
    for (let i = 0; i < textamen.length; i++) {
        cadena += "-" + textamen[i]
    }
    return cadena
}
const g = addGuiones("astrolopitecus")
console.log(g)

// Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra
// y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.
const contadorDeLetras = (textito, letrota) => {
    let veces = 0;
    for (let i = 0; i < textito.length; i++) {
        if (textito.toUpperCase()[i] === letrota.toUpperCase()) {
            veces++;
        }
    }
    return veces
}
const j = contadorDeLetras("Ñengoñengo", "ñ")
console.log(j)

//Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas
//de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente.
//Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta
// en mayúsculas o minúsculas.

const contadorDeLetras2 = (texto1, texto2, letrita) => {
    let contador1 = 0;
    let contador2 = 0;
    for (let i = 0; i < texto1.length; i++) {
        if (texto1[i].toUpperCase() === letrita.toUpperCase())
            contador1++
    }
    for (let i = 0; i < texto2.length; i++) {
        if (texto2[i].toUpperCase() === letrita.toUpperCase())
            contador2++
    }
    if (contador1 > contador2) return texto1;
    else if (contador2 > contador1) return texto2;
    else return "Son iguales"
}
const w = contadorDeLetras2("pizarra", "puerta", "a");
console.log(w)

// Escribe una función llamada toCase que reciba como parámetro de entrada 
//una cadena de texto y devuelva esa misma cadena de texto en minúsculas,
// un guión medio y de nuevo esa misma cadena de texto en mayúsculas.
const toCase = (txt) => {
    return txt.toLowerCase() + "-" + txt.toUpperCase();
}
const resuu = toCase("Luz")
console.log(resuu)

//Escribe una función llamada shortcut que tome dos cadenas de 
//texto y devuelva la inicial de cada una de las dos cadenas.
const shortcut = (y1, y2) => {
    return y1[0] + y2[0]
}
const alo = shortcut("ñoki", "bolígrafo")
console.log(alo)

//Escribe una función llamada firstChar, que devuelva la primera letra
// que no sea un espacio cuando una cadena de texto es pasada.
const firstChar = (s) => {
    return s.trim()[0];
}
console.log(firstChar("  Mesalakala  "))

// Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva
// la posición de la primera ocurrencia de la segunda cadena de texto en la primera. 
//La función no debería tener en cuenta mayúsculas y minúsculas.
const indexOfIgnoreCase = (h1, h2) => {
    return h1.toLowerCase().indexOf(h2.toLowerCase())
}
const y = indexOfIgnoreCase("Marruecos", "ue")
console.log(y)

//Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva
// la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que 
// hay hasta el primer espacio.
const firstWord = (u1) => {
    const whiteSpace = u1.indexOf(" ");
    const resull = u1.substring(0, whiteSpace)
    return resull;
}
const x = firstWord("Daria con el retulador")
console.log(x)
