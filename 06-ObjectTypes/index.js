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
