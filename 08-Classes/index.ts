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