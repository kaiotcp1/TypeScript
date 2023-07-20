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
//Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        ;
        this.x = x;
        console.log('X inserido com sucesso');
    }
    ;
    set fillY(y) {
        if (y === 0) {
            return;
        }
        ;
        this.y = y;
        console.log('Y inserido com sucesso');
    }
    ;
    get fullCoords() {
        return console.log(`As cordenadas são: X:${this.x} --- Y:${this.y}`);
    }
    ;
}
;
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 2;
console.log(myCoords);
myCoords.fullCoords;
console.log('--------------');
;
class blogPost {
    constructor(title) {
        this.title = title;
    }
    ;
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
    ;
}
;
const myPost = new blogPost('Hello World');
console.log(myPost.itemTitle());
console.log('--------------');
//Override de métodos
class Base {
    someMethod() {
        console.log('Alguma coisa');
    }
    ;
}
;
class Nova extends Base {
    someMethod() {
        console.log('Testando outra coisa #Override');
    }
    ;
}
;
const myObject2 = new Base();
const myObject = new Nova();
myObject2.someMethod();
myObject.someMethod();
console.log('--------------');
// Protected
class E {
    constructor() {
        this.x = 10;
    }
}
;
class F extends E {
    showX() {
        console.log(`X: ${this.x}`);
    }
    ;
}
;
const fInstance = new F();
fInstance.showX();
console.log('--------------');
//Private
//Só pode ser acesso pelas classe que os definiu e também precisam
//de métodos para serem acessados.
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        return console.log(this.name);
    }
    ;
}
;
const pObj = new PrivateClass();
pObj.showName();
console.log('--------------');
