// Arrays
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers);
console.log(numbers[3]);
const nomes: string[] = ["Kaio", "Karen"];
console.log(nomes);


//Sintaxe diferente
const nums: Array<number> = [100, 200];
nums.push(300);
console.log(nums);


//Any
const arr1: any = ['kaio', {
    name: 'Kaio'
}, [3, 5, 6, 7]];
console.log(arr1);
console.log(arr1[2]);


//Parametros tipados
function soma(a: number, b: number) {
    console.log(`A some de A + B é : ${a + b}`);
};
soma(3, 3);


//retorno de função
function greeting(name: string): string {
    return `Olá, ${name}`;
};
console.log(greeting('Kaio'));


//função anonima
setTimeout(function () {
    const sallary: number = 1000;
    // console.log(parseFloat(sallary))
    console.log(sallary);
}, 2000);


//tipos de objeto
function passCoordinates(coord: { x: number, y: number }) {
    console.log(`X coordinates: ${coord.x}, Y coordinates: ${coord.y}`);
};
const objCoord = {x: 329, y:293};
passCoordinates(objCoord);
const pessoaObj:{nome: string, surname: string} = {nome: "Kaio", surname: "Pasqualinotto"};
console.log(pessoaObj);


//propriedades opcionais
function showNumbers(a: number, b:number, c?: number) {
    console.log(`A:${a}, B:${b}, C:${c}`);
};
showNumbers(1,2);


//validando argumento opcional
function advancedGreeting(firstname: string, lastname?:string) {
    if(lastname !== undefined) {
        return console.log(`Ola, ${firstname} ${lastname}, tudo bem?`);
    };
    
    return console.log(`Olá, ${firstname}, tudo bem?`);
};
advancedGreeting('Kaio');
advancedGreeting('Kaio', 'Pasqualinotto');
