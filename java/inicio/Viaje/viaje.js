const costeHotel = (night) => 140 * night;

const costeAvion = (city, night) => {
    let coste;
    if (city == "oviedo") {
        coste = night * 15
    }
    else if (city == "tokyo") {
        coste = night * 700
    }
    else if (city == "madrid" || city == "barcelona") {
        coste = night * 90
    };
    if (night > 3) {
        return coste *= 0.9
    }
    return coste
}

const costeAlquilerCoche = (night) => {
    let coste = night * 40
    if (night >= 7) {
        return coste - 50
    }
    else if (night >= 3) {
        return coste - 20
    }
    else if (night < 3) {
        return coste
    }
}

const numNoches = prompt('numero de noches');
const destino = prompt('destino');
const resultado1 = Number(costeHotel(numNoches));
const resultado2 = Number(costeAvion(destino.toLowerCase(), numNoches));
const resultado3 = Number(costeAlquilerCoche(numNoches));
console.log("Coste hotel: " + resultado1);
console.log("Coste viaje: ", resultado2);
console.log("Coste alquiler coche: ", resultado3);
console.log("Total:", resultado1 + resultado2 + resultado3);