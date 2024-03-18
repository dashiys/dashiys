const miperro = {
    patas: 4,
    colas: 3,
    amigos: "no",
}

console.log(miperro.patas);
console.log(miperro.colas);
console.log(miperro.amigos);

//2

const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

const ojos = testObj.ojos;
const nombre = testObj.nombre;

console.log(ojos);
console.log(nombre);

//3

const testObj1 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj1[playerNumber];

console.log(player);

//4
const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};

myDog.nombre = "HappyCode"
console.log(myDog.nombre);

//5

function phoneticLookup(val) {
    let result = "";

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }
    return lookup[val]
}

const value = phoneticLookup("charlie")
console.log(value);

//6
const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "Pitbull",
        "titulo": "Flauta m",
        "formatos": [
            "VHS",
            "LOL",
            "KA"
        ],
        "premios": false
    }
];
console.log(myMusic[0].artista)
console.log(myMusic[1].formatos[0])

//7
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"]
console.log(gloveBoxContents);

//8
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree);

//Find
const users = [
    {
        "name": "Paco",
        "isActive": false,
        "age": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "age": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "age": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "age": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "age": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "age": 7
    },
];

const choosedUser = users.find(user => user.name === "Juan").age
console.log(choosedUser);