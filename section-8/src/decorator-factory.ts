function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('Waan ku salaamay Madinay!')
class Person {
    name = 'Maxamed';
    constructor() {
        console.log('Creating a new Person object');
    }
}

const person = new Person();
console.log(person);

export { };
