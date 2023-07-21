// importação de arquivos
import importGreet2 from './greet.js';
importGreet2();
//-------------------------------------------

//import de variavel;
import { x } from './variable.js';
console.log(x);
//-------------------------------------------

//Multiplas importações
import { a, b, myFunction } from './multiples.js';
console.log(a);
console.log(b);
myFunction();
//-------------------------------------------

//Alias 
import { someName as name } from './changeName.js';
console.log(name);
//-------------------------------------------

//import All
import * as myNumbers from './numbers.js';
console.log(myNumbers); //Object com todos os valores;
const nX = myNumbers.n1;
console.log(nX);
//-------------------------------------------

//Importando tipos
import { Human } from './myType.js';

class User implements Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
};

const kaio = new User('Kaio', 22);
console.log(kaio);
//-------------------------------------------
