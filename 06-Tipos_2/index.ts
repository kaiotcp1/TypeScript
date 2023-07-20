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