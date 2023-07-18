/*
Void 
Função sem retorno.
*/

function withoutReturn(): void {
    console.log('Esta função não tem retorno !');
    // return 1;
}
withoutReturn();
console.log('-------------------')


//Callback como argumento
function greeting(name: string): string {
    return `Olá, ${name}`;
};

function preGreeting(fn: (name: string) => string, userName: string) {
    console.log('Preparando a função !');
    const greet = fn(userName);
    console.log(greet);
};

preGreeting(greeting, 'Kaio');
preGreeting(greeting, 'Karen');
console.log('-------------------')


//Generic function
function firstElement<T>(arr: T[]): T {
    return arr[0];
};
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));

function mergeObject<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    };
};
const newObject = mergeObject({name: 'Kaio'}, {age: 30, job: 'Programmer'});
console.log(newObject);
console.log('-------------------');
