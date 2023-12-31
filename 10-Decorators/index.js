"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Exemplo decorator
function myDecorator() {
    console.log('Iniciando decorator !');
    return function (target, propertKey, descriptor) {
        console.log('Executando o decorator');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
;
class MyClass {
    testing() {
        console.log('Terminando a execução do método');
    }
    ;
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
;
const myObj = new MyClass();
myObj.testing();
console.log('--------------------');
//Multiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log('executou a');
    };
}
;
function b() {
    return function (target, propertKey, descriptor) {
        console.log('executou b');
    };
}
;
class MultipleDecorators {
    testing() {
        console.log('terminando execução');
    }
    ;
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
;
console.log('--------------------');
//Class decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === 'User') {
        console.log('Criando usuário !');
    }
    ;
}
;
let User = class User {
    constructor(name) {
        this.name = name;
    }
    ;
};
User = __decorate([
    classDec
], User);
;
const kaio = new User('Kaio');
console.log(kaio);
console.log('--------------------');
//Method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
;
class Machine {
    constructor(name) {
        this.name = name;
    }
    ;
    showName() {
        console.log(this);
        return console.log(`O nome da maquina é ${this.name}`);
    }
    ;
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
;
const trator = new Machine('Trator');
trator.showName();
console.log('--------------------');
//Acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    get showName() {
        return console.log(`Nome do monstro: ${this.name}`);
    }
    ;
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
    ;
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
;
const charmander = new Monster('charmander', 10);
console.log(charmander);
console.log('--------------------');
//Property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
;
class ID {
    constructor(id) {
        this.id = id;
    }
    ;
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
;
const newItem = new ID('1');
console.log(newItem.id);
console.log('--------------------');
//Exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
    ;
};
Book = __decorate([
    createdDate
], Book);
;
const newBook = new Book(12);
newBook.createdAt;
console.log(newBook);
console.log('--------------------');
//Exemplo real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] == true) {
                console.log('Usuário já postou !');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
            return descriptor;
        };
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
    ;
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
;
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu Segundo post!', newPost.alreadyPosted);
