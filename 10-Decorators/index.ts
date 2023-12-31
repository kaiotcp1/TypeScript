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
    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log('executou a');
    };
};

function b() {
    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
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
    if (constructor.name === 'User') {
        console.log('Criando usuário !');
    };
};

@classDec
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    };
};

const kaio = new User('Kaio');
console.log(kaio);
console.log('--------------------');


//Method decorator
function enumerable(value: boolean) {
    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
};

class Machine {
    name

    constructor(name: string) {
        this.name = name;
    };

    @enumerable(false)
    showName() {
        console.log(this)
        return console.log(`O nome da maquina é ${this.name}`);
    };
};

const trator = new Machine('Trator')
trator.showName();
console.log('--------------------');


//Acessor decorator
class Monster {
    name?;
    age?;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    @enumerable(true)
    get showName() {
        return console.log(`Nome do monstro: ${this.name}`);
    };

    @enumerable(false)
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    };
};

const charmander = new Monster('charmander', 10);
console.log(charmander);
console.log('--------------------');


//Property decorator
function formatNumber() {
    return function (target: Object, propertyKey: string) {
        let value: string;

        const getter = function () {
            return value;
        };

        const setter = function (newValue: string) {
            value = newValue.padStart(5, '0');
        };

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
};

class ID {
    @formatNumber()
    id;

    constructor(id: string) {
        this.id = id;
    };
};
const newItem = new ID('1');
console.log(newItem.id);
console.log('--------------------');


//Exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id;
    };
};

const newBook = new Book(12);
newBook.createdAt
console.log(newBook);
console.log('--------------------');


//Exemplo real method decorator
function checkIfUserPosted() {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args: any[]) {
            if (args[1] == true) {
                console.log('Usuário já postou !')
                return null
            } else {
                return childFunction.apply(this, args)
            }
            return descriptor;
        }
    }
}

class Post {
    alreadyPosted = false;

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    };
};

const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu Segundo post!', newPost.alreadyPosted);
