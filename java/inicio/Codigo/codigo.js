let bucle = true
while (bucle) { //mientras bucle sea true el bucle seguirá iterando
    const historia = prompt("Entras en una mazmorra con dos puertas. La puerta 1 y la puerta 2. Una puerta lleva a una muerte segura y la otra a otra mazmorra.")
    const n = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (n == historia) {
        alert("Has escogido sabiamente.")
    }
    else {
        alert("Te ha comido")
        bucle = false
    }
}