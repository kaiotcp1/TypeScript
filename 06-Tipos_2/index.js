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
;
const myCar = { name: 'Fusca', wheels: 4, engine: 1.2 };
const myPen = { name: 'Bic', wheels: false, engine: false };
console.log(myCar);
console.log(myPen.name);
console.log('-----------------');
//Type parameters
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
;
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
// console.log(getSomeKey(server, 'teste'));
console.log('-----------------');
function showCharName(obj, name) {
    return `${obj.name}`;
}
;
const myChar = {
    name: 'Kaio',
    age: 22,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, 'name'));
// console.log(showCharName(myChar, 'teste'));
console.log('-----------------');
//Typeof type operator
const userName = 'Kaio';
const userName2 = 'João';
const userName3 = 'Karen';
console.log(userName);
console.log(userName2);
console.log(userName3);
console.log('-----------------');
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
;
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
console.log('-----------------');
;
;
const someVar = 5;
// const someVar2:myType = 'Teste'; //Fail..
console.log('-----------------');
const test = 'some text';
