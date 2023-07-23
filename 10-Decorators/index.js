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
