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
//Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    ;
    return biggest;
}
;
console.log(biggestNumber(5, 3));
console.log(biggestNumber(2, 6));
console.log('-------------------');
/*
Especificar tipo de argumento
Podemos determinar os tipos aceitos direto na execução,
muito utilizado quando se utiliza bibliotecas, pois
não conseguimos utilizar Constraints...
*/
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
;
console.log(mergeArray([1, 2, 3], [4, 5]));
console.log(mergeArray([1, 2, 3], ['Karen,', 'Kaio']));
console.log('-------------------');
/*
Parametros opcionais
Podemos dizer que um parâmetro é opcional, dessa forma
podemos utilizalo ou não na invocação da função e em outros casos...
*/
function modernGreeting(name, greet) {
    if (greet) { //Narrow
        return `Olá, ${greet} ${name}, tudo bem ?`;
    }
    ;
    return `Olá ${name}, tudo bem ?`;
}
;
console.log(modernGreeting('Kaio'));
console.log(modernGreeting('Kaio', 'Sr'));
console.log('-------------------');
/*
Parametro default
Podemos inferir um valor default diretamente no parâmetro da função
e ele sera tipado por inferência e possibilitando a troca de seus valores
nos argumento, ao invocar a função.
*/
function somaDefault(n, m = 10) {
    return console.log(n + m);
}
;
somaDefault(10);
somaDefault(10, 11);
console.log('-------------------');
/*
Tipo unknown
é semelhante ao any, ele aceita qualquer tipo de dado,
porém só deixa ser executado se houber validação de tipo.
*/
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
    ;
}
;
doSomething([1, 2, 3]);
doSomething(5);
console.log('-------------------');
/*
Never
É um tipo de retorno semelhante ao void,
porém é utilizado quando a funçção não retorna nada
como retorno de erros, que acabam parando a aplicação.
*/
function showErrorMessage(msg) {
    throw new Error(msg);
}
;
showErrorMessage('Algum erro !');
