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
        console.log('Termiando a execução do método');
    };
};

const myObj = new MyClass();
myObj.testing();
console.log('--------------------');