let bucle = true
while (bucle) {
    const nombre = prompt("Introduzca su nombre, por favor")
    if (!hasNumber(nombre)) {
        const respuesta = prompt("El nombre introducido no tiene ningún número. ¿Es su nombre real? Yes/No")
        if (respuesta == "Yes") {
            bucle = false
        }
        else alert("Los datos introducidos son incorrectos. El nombre introducido tiene un número.")
    } else {
        alert("Has introducido un número.")
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}