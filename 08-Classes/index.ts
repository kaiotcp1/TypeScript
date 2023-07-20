//Campos em classe
class User {
    name!: string
    age!: number
};

const kaio = new User();
kaio.name = 'Kaio';
kaio.age = 22;
// kaio.job = 'Programmer';
console.log(kaio);
console.log('--------------');


//Constructor
class NewUser {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
};

const Kaio = new NewUser('Kaio', 22);
console.log(Kaio);
console.log('--------------');
