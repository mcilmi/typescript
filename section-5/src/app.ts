/**
 * Interface is contract that implementations shall depend on
 */

interface Greetable {
    name: string;
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

user1.greet('Assalamu caleykum, magaceygu waa');