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

const result = users.filter(user => user.isActive === true);
console.log(result)

const mayorEdad = users.filter(user => user.age > 18);
console.log(mayorEdad)

//reduce

const nums = [1, 2, 3];

const media = nums.reduce((acc, number) => acc + number) / nums.length;
console.log(media);