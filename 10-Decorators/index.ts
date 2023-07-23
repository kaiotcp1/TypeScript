//Exemplo decorator
function myDecorator() {
    console.log('Iniciando decorator !');
    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log('Executando o decorator');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
};

class MyClass {
    @myDecorator()
    testing() {
        console.log('Terminando a execução do método');
    };
};

const myObj = new MyClass();
myObj.testing();
console.log('--------------------');


//Multiplos decorators
function a() {
   return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
       console.log('executou a');
   };
};

function b() {
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log('executou b');
    };
 };

class MultipleDecorators {
    @a()
    @b()
    testing() {
        console.log('terminando execução');
    };
};
console.log('--------------------');


//Class decorator
function classDec(constructor: Function) {
    console.log(constructor.name);
    if(constructor.name === 'User') {
        console.log('Criando usuário !');
    };
};

@classDec
class User {
    name: string;

    constructor(name:string) {
        this.name = name;
    };
};

const kaio = new User('Kaio');
console.log(kaio);
console.log('--------------------');
