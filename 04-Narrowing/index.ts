/* 
Type guard
É uma validação do tipo utilizando o typeof, comparando o retorno do
operador com um possível tipo
*/ 
function sum(a: number | string, b: number | string) {
   if(typeof a === 'string' && typeof b === 'string') {
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