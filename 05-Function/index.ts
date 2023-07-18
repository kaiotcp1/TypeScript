/*
Void 
Função sem retorno.
*/

function withoutReturn():void {
    console.log('Esta função não tem retorno !');
    // return 1;
}
withoutReturn();
console.log('-------------------')


//Callback como argumento
function greeting(name: string):string {
    return `Olá, ${name}`;
};

function preGreeting(fn: (name:string) => string, userName:string) {
    console.log('Preparando a função !');
    const greet = fn(userName);
    console.log(greet);
};

preGreeting(greeting, 'Kaio');
preGreeting(greeting, 'Karen');
