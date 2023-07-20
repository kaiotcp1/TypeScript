"use strict";
//Generics
function showData(arg) {
    return `O dado é ${arg}`;
}
;
console.log(showData('Kaio'));
console.log(showData(5));
console.log('-----------------');
/*
Contraint em Generic
Obrigamos o generic a ter um tipo especifico de propriedade
dessa forma somos obrigado a satisfazer essa condição.
no exemplo é um objeto com a propriedade name, as outras
propriedades não importam ou até mesmo ter apenas o name.
*/
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
;
const myObj = { name: 'Porta', cor: 'Branca' };
// const myObj2 = {cor: 'Branca'};
console.log(showProductName(myObj));
// console.log(showProductName(myObj2));
console.log('-----------------');
