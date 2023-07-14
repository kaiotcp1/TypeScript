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
