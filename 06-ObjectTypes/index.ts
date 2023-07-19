//Tipo de objeto para função com interface
interface Product {
    name: string,
    price: number,
    isAvailable: boolean
};
function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        return console.log('O produto está disponível');
    }
        return console.log('O produto não está disponível');
};

const pd1:Product = {
    name: 'Camisa',
    price: 22.99,
    isAvailable: false
};

showProductDetails(pd1); // <----Usando interface
showProductDetails({name: 'Tênis', price: 83.99, isAvailable: true });