//Generics
function showData<T>(arg: T): string {
    return `O dado é ${arg}`;
};
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
function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é: ${obj.name}`;
};

const myObj = { name: 'Porta', cor: 'Branca' };
// const myObj2 = {cor: 'Branca'};

console.log(showProductName(myObj));
// console.log(showProductName(myObj2));
console.log('-----------------');


//Generics com interface
interface MyObj<T, U> {
    name: string,
    wheels: T,
    engine: U
};

type Car = MyObj<number, number>;
type Pen = MyObj<boolean, boolean>;

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.2 };
const myPen: Pen = { name: 'Bic', wheels: false, engine: false };

console.log(myCar);
console.log(myPen.name);
console.log('-----------------');


//Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
};

const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
// console.log(getSomeKey(server, 'teste'));
console.log('-----------------');


//Keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean};
type C = keyof Character;

function showCharName(obj: Character, name: C): string {
    return `${obj.name}`
};

const myChar: Character = {
    name: 'Kaio',
    age: 22,
    hasDriveLicense: true,
};

console.log(showCharName(myChar, 'name'));
// console.log(showCharName(myChar, 'teste'));
console.log('-----------------');


//Typeof type operator
const userName: string = 'Kaio';
const userName2: typeof userName = 'João';
type x = typeof userName;
const userName3: x = 'Karen';
console.log(userName);
console.log(userName2);
console.log(userName3)
console.log('-----------------');


//Indexed access type
type Truck = {km: number, kg: number, description: string};
type Km = Truck['km'];

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};

function showKm(km: Km) {
    console.log(`O veículo tem a km de: ${km}`);
};

showKm(newTruck.km);

const newCar = {
    km: 5000,
    kg: 1000,
};

showKm(newCar.km);
console.log('-----------------');


//Conditional types
interface A {};

interface B {};

type myType = B extends A ? number : string;
const someVar:myType = 5;
// const someVar2:myType = 'Teste'; //Fail..
console.log('-----------------');


//Template literals type
type testA = 'text';
type CustomType = `some ${testA}`;
const test: CustomType = 'some text';
// const testing2 :CustomType = 'some text 2'//Fail

type a1 = 'testando';
type a2 = 'Union';
type a3 = `${a1}` | `${a2}`;