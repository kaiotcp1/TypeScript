const x: number = 30;
const y: number = 32.3421332

console.log(x);
console.log( typeof x)
console.log(y.toPrecision(5))

//String
const firstName: string = "Kaio";
console.log(firstName);
console.log(firstName.toUpperCase());

let fullname: string;
let name2: string = "Pasqualinotto";

fullname = `${firstName} ${name2}`
console.log(fullname);

// Boolean
let a: boolean = true;
console.log(a);
console.log(typeof a);

// inference e annotation
const ann: string = "Teste";
let inf = "Teste";
