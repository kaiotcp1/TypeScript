"use strict";
//Campos em classe
class User {
}
;
const kaio = new User();
kaio.name = 'Kaio';
kaio.age = 22;
// kaio.job = 'Programmer';
console.log(kaio);
console.log('--------------');
//Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
}
;
const Kaio = new NewUser('Kaio', 22);
console.log(Kaio);
console.log('--------------');
//Campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
    ;
}
;
const fusca = new Car('Fusca');
console.log(fusca);
console.log(fusca.wheels);
console.log('--------------');
//Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
    ;
}
;
const trator = new Machine('trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
    ;
}
;
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
console.log('--------------');
