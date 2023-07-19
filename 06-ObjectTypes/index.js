"use strict";
;
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        return console.log('O produto está disponível');
    }
    return console.log('O produto não está disponível');
}
;
const pd1 = {
    name: 'Camisa',
    price: 22.99,
    isAvailable: false
};
showProductDetails(pd1); // <----Usando interface
showProductDetails({ name: 'Tênis', price: 83.99, isAvailable: true });
console.log('-------------------');
;
//Interface com parâmetro opcional
function showUserDetails(user) {
    console.log(`O nome do usuário é:  ${user.name}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
    ;
}
;
const u1 = { name: 'Kaio', role: 'Admin' };
const u2 = { name: 'Karen' };
showUserDetails(u1);
showUserDetails(u2);
console.log('-------------------');
;
const fusca = {
    brand: 'VW',
    wheels: 4,
};
console.log(fusca);
// fusca.wheels = 5;
console.log('-------------------');
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
console.log('-------------------');
;
;
const kaio = {
    name: 'Kaio',
    age: 22
};
const goku = {
    name: 'Goku',
    age: 22,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(kaio);
console.log(goku);
console.log('-------------------');
;
;
const arnold = {
    name: 'Arbold',
    type: 'Rifle',
    caliber: 7.62
};
console.log(arnold);
console.log(arnold.type);
console.log('-------------------');
//Readonly array
let myArray = ['Kaio', 'Karen', 'Karina'];
// myArray[3] = 'Kay';
console.log(myArray);
myArray.forEach((item) => {
    console.log('Name: ' + item + '-----');
});
myArray = myArray.map((item) => {
    return 'Name2: ' + item;
});
console.log(myArray);
console.log('-------------------');
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
// const mixedArray: fiveNumbers = [1,2,3,4,'KAIO'];
console.log('-------------------');
