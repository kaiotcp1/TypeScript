"use strict";
// Arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
console.log(numbers[3]);
const nomes = ["Kaio", "Karen"];
console.log(nomes);
//Sintaxe diferente
const nums = [100, 200];
nums.push(300);
console.log(nums);
//Any
const arr1 = ['kaio', {
        name: 'Kaio'
    }, [3, 5, 6, 7]];
console.log(arr1);
console.log(arr1[2]);
//Parametros tipados
function soma(a, b) {
    console.log(`A some de A + B é : ${a + b}`);
}
;
soma(3, 3);
//retorno de função
function greeting(name) {
    return `Olá, ${name}`;
}
;
console.log(greeting('Kaio'));
//função anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    console.log(sallary);
}, 2000);
//tipos de objeto
function passCoordinates(coord) {
    console.log(`X coordinates: ${coord.x}, Y coordinates: ${coord.y}`);
}
;
const objCoord = { x: 329, y: 293 };
passCoordinates(objCoord);
const pessoaObj = { nome: "Kaio", surname: "Pasqualinotto" };
console.log(pessoaObj);
//propriedades opcionais
function showNumbers(a, b, c) {
    console.log(`A:${a}, B:${b}, C:${c}`);
}
;
showNumbers(1, 2);
//validando argumento opcional
function advancedGreeting(firstname, lastname) {
    if (lastname !== undefined) {
        return console.log(`Ola, ${firstname} ${lastname}, tudo bem?`);
    }
    ;
    return console.log(`Olá, ${firstname}, tudo bem?`);
}
;
advancedGreeting('Kaio');
advancedGreeting('Kaio', 'Pasqualinotto');
//union type
function showBalance(balance) {
    console.log(`O saldo da conta é ${balance}`);
}
;
showBalance(100);
showBalance('500');
const arr2 = [1, 'test', true];
console.log(arr2);
//Avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    ;
    return `A função do usuário é ${role}`;
}
;
console.log(showUserRole(false));
console.log(showUserRole('admin'));
function showId(id) {
    return console.log(`O ID é: ${id}`);
}
;
showId(32);
showId('29123723');
;
function showCoords(obj) {
    console.log(`As cordanadas são: X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
;
const objCoords = {
    x: 10,
    y: 30,
    z: 40
};
showCoords(objCoords);
;
;
// age está sendo implementando na inteface Person e não substituindo.
const somePerson = { name: "Kaio", age: 22 };
console.log(somePerson);
//literal types + union types
let test;
test = "testando";
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
// Só aceita valores determinados.
showDirection('left');
//bigint
let n;
n = 1000n;
console.log(typeof n + ' ' + n);
