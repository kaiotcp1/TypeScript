/* 
Type guard
É uma validação do tipo utilizando o typeof, comparando o retorno do
operador com um possível tipo
*/
function sum(a: number | string, b: number | string) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    } else {
        console.log('impossível realizar a soma !');
    };
};
sum('4', '52');
sum(8, 8);
sum('5', 3);
console.log('-----------');


// Checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {
    if (operation) { //Narrow
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        } else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        };
    } else {
        console.log('Por favor, defina uma operação !');
    };
};
operations([1, 2, 3]);
operations([1, 2, 3], 'sum');
operations([2, 4, 8], 'multiply');
console.log('-----------');
