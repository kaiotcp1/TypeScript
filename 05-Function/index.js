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
