"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importação de arquivos
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
//-------------------------------------------
//import de variavel;
const variable_js_1 = require("./variable.js");
console.log(variable_js_1.x);
//-------------------------------------------
//Multiplas importações
const multiples_js_1 = require("./multiples.js");
console.log(multiples_js_1.a);
console.log(multiples_js_1.b);
(0, multiples_js_1.myFunction)();
//-------------------------------------------
//Alias 
const changeName_js_1 = require("./changeName.js");
console.log(changeName_js_1.someName);
