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


//Campo readonly
class Car {
    name;
    readonly wheels = 4;

    constructor(name: string) {
        this.name = name;
    };
};

const fusca = new Car('Fusca');
console.log(fusca);
console.log(fusca.wheels);
console.log('--------------');


//Herança e Super
class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    };
};
const trator = new Machine('trator');

class KillerMachine extends Machine {
    guns;

    constructor(name: string, guns: number) {
        super(name);
        this.guns = guns;
    };
};
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
console.log('--------------');
