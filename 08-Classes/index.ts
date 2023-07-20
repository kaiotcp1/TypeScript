//Campos em classe
class User {
    name!: string
    age!: number
};

const kaio = new User();
kaio.name = 'Kaio';
kaio.age = 22;
// kaio.job = 'Programmer';
console.log(kaio);
console.log('--------------');


//Constructor
class NewUser {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
};

const Kaio = new NewUser('Kaio', 22);
console.log(Kaio);
console.log('--------------');


//Campo readonly
class Car {
    name;
    readonly wheels = 4;

    constructor(name: string) {
        this.name = name;
    };
};

const fusca = new Car('Fusca');
console.log(fusca);
console.log(fusca.wheels);
console.log('--------------');


//Herança e Super
class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    };
};
const trator = new Machine('trator');

class KillerMachine extends Machine {
    guns;

    constructor(name: string, guns: number) {
        super(name);
        this.guns = guns;
    };
};
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
console.log('--------------');


//Métodos
class Dwarf {
    name;

    constructor(name: string) {
        this.name = name;
    }

    greeting() {
        console.log(`Hello ${this.name}`);
    };
};

const kaio3 = new Dwarf('Kaio');
console.log(kaio3);
console.log(kaio3.name);
kaio3.greeting();


//Getters
class Person {
    name;
    surname;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    };

    get fullName() {
        return console.log(`Full name is ${this.name} ${this.surname}`);
    };
};

const kaio4 = new Person('Kaio', 'Pasqualinotto');
kaio4.fullName;
console.log('--------------');


//Setters
class Coords {
    x!: number;
    y!: number;

    set fillX(x: number) {
        if(x === 0) {
            return
        };

        this.x = x;
        console.log('X inserido com sucesso');
    };

    set fillY(y: number) {
        if(y === 0) {
            return
        };

        this.y = y;
        console.log('Y inserido com sucesso');
    };

    get fullCoords() {
        return console.log(`As cordenadas são: X:${this.x} --- Y:${this.y}`);
    };
};

const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 2;
console.log(myCoords);
myCoords.fullCoords
console.log('--------------');


//Implements
interface showTitle {
    itemTitle(): string;
};

class blogPost implements showTitle {
    title;

    constructor(title: string) {
        this.title = title;
    };

    itemTitle() {
        return `O título do post é: ${this.title}`;
    };
    
};

const myPost = new blogPost('Hello World');
console.log(myPost.itemTitle());
console.log('--------------');


//Override de métodos
class Base {
    someMethod(): void {
        console.log('Alguma coisa');
    };
};

class Nova extends Base {
    someMethod(): void {
        console.log('Testando outra coisa #Override');
    };
};
const myObject2 = new Base();
const myObject = new Nova();
myObject2.someMethod();
myObject.someMethod();
console.log('--------------');


// Protected
class E {
    protected x = 10;
};

class F extends E {
    showX() {
        console.log(`X: ${this.x}`)};
};

const fInstance = new F();
fInstance.showX();
console.log('--------------');


//Private
//Só pode ser acesso pelas classe que os definiu e também precisam
//de métodos para serem acessados.
class PrivateClass {
    private name = 'Private';

    showName() {
        return console.log(this.name);
    };
};

const pObj = new PrivateClass()
pObj.showName();
console.log('--------------');


//Static members
class StaticMembers {
    static prop = 'Teste static';

    static staticMethod() {
        console.log('Este é um método estático');
    };
};
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
console.log('--------------');

