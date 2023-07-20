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
