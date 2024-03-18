let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    const gen = getWomansName.filter(gender => gender.isActive === "female");// const r = ...
    console.log(getWomansName())// console.log('getWomansName(): ' , r);
}

fetch("https://swapi.py4e.com/api/people")
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        console.log(characters);
        getWomansName();
    });