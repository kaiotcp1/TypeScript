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

const pd1: Product = {
    name: 'Camisa',
    price: 22.99,
    isAvailable: false
};

showProductDetails(pd1); // <----Usando interface
showProductDetails({ name: 'Tênis', price: 83.99, isAvailable: true });
console.log('-------------------');

interface User {
    name: string,
    role?: string,
};

//Interface com parâmetro opcional
function showUserDetails(user: User) {
    console.log(`O nome do usuário é:  ${user.name}`);

    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    };
};

const u1: User = { name: 'Kaio', role: 'Admin' };
const u2: User = { name: 'Karen' };

showUserDetails(u1);
showUserDetails(u2);
console.log('-------------------');


// readonly
interface Car {
    brand: string,
    readonly wheels: number,
};

const fusca: Car = {
    brand: 'VW',
    wheels: 4,
};
console.log(fusca);
// fusca.wheels = 5;
console.log('-------------------');


/*
Index signature
Utilizado quando não se sabe o nome da chave mas o tipo de seu value
*/
interface CoordObject {
    [index: string]: number,
}
let coords: CoordObject = {
    x: 10
}
coords.y = 15
console.log(coords);
console.log('-------------------');


//Extending interfaces
interface Human {
    name: string,
    age: number,
};
interface SuperHuman extends Human {
    superpowers: string[];
};
const kaio: Human = {
    name: 'Kaio',
    age: 22
};
const goku: SuperHuman = {
    name: 'Goku',
    age: 22,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(kaio);
console.log(goku);
console.log('-------------------');


//Intersection types
interface Character {
    name: string,
};
interface Gun {
    type: string,
    caliber: number,
};
type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: 'Arbold',
    type: 'Rifle',
    caliber: 7.62
};
console.log(arnold);
console.log(arnold.type);
console.log('-------------------');


//Readonly array
let myArray: ReadonlyArray<string> = ['Kaio', 'Karen', 'Karina'];
// myArray[3] = 'Kay';
console.log(myArray);
myArray.forEach((item) => {
    console.log('Name: ' + item + '-----');
})
myArray = myArray.map((item) => {
    return 'Name2: ' + item;
});
console.log(myArray)
console.log('-------------------');


//Tuplas
type fiveNumbers = [number, number, number, number, number,];
const myNumberArray: fiveNumbers = [1,2,3,4,5];
console.log(myNumberArray);
// const mixedArray: fiveNumbers = [1,2,3,4,'KAIO'];
console.log('-------------------');


//Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10;
    console.log(`${numbers[0]} ------ ${numbers[1]}`)
};
showNumbers([1,5]);
console.log('-------------------');

