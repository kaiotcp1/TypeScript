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