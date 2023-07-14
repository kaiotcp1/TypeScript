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
