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
console.log('-------------------');

interface User {
    name: string,
    role?: string,
};

//Interface com parâmetro opcional
function showUserDetails(user: User) {
    console.log(`O nome do usuário é:  ${user.name}`);

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    };
};

const u1:User = {name: 'Kaio', role: 'Admin'};
const u2:User = {name: 'Karen'};

showUserDetails(u1);
showUserDetails(u2);
console.log('-------------------');
