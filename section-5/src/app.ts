/**
 * Interface is contract that implementations shall depend on
 */

interface Named {
    readonly name: string;
}

// It is possible to extend existing interface, thus composition is achieved. 
interface Greetable extends Named {
    age: number;
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }

}

let user1: Greetable;

user1 = new Person('Madinah Maxamed', 7);
// user1.name = 'new name'; // Fails due to readonly
user1.greet('Assalamu caleykum, magaceygu waa');