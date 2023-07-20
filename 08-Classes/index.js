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
//Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hello ${this.name}`);
    }
    ;
}
;
const kaio3 = new Dwarf('Kaio');
console.log(kaio3);
console.log(kaio3.name);
kaio3.greeting();
console.log('--------------');
//Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    ;
    get fullName() {
        return console.log(`Full name is ${this.name} ${this.surname}`);
    }
    ;
}
;
const kaio4 = new Person('Kaio', 'Pasqualinotto');
kaio4.fullName;
console.log('--------------');
