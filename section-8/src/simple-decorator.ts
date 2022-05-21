function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}
@Logger
class Person {
    name = 'Maxamed';
    constructor() {
        console.log('Creating a new Person object');
    }
}

const person = new Person();
console.log(person);

export { };