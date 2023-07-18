"use strict";
/*
Void
Função sem retorno.
*/
function withoutReturn() {
    console.log('Esta função não tem retorno !');
    // return 1;
}
withoutReturn();
console.log('-------------------');
//Callback como argumento
function greeting(name) {
    return `Olá, ${name}`;
}
;
function preGreeting(fn, userName) {
    console.log('Preparando a função !');
    const greet = fn(userName);
    console.log(greet);
}
;
preGreeting(greeting, 'Kaio');
preGreeting(greeting, 'Karen');
console.log('-------------------');
//Generic function
function firstElement(arr) {
    return arr[0];
}
;
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
function mergeObject(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
;
const newObject = mergeObject({ name: 'Kaio' }, { age: 30, job: 'Programmer' });
console.log(newObject);
console.log('-------------------');
