/**
 * Interface is contract that implementations shall depend on
 */

interface Named {
    readonly name: string;
    outputName?: string;// Optional property
}

// It is possible to extend existing interfaces, thus composition is achieved. 
interface Greetable extends Named {
    age: number;
    greet(phrase: string): void;
}

interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

console.log('add(10,22):', add(10, 22));


class Person implements Greetable {
    name: string;
    age: number = 7;

    constructor(name?: string) {
        this.name = name;
    }

    greet(phrase: string): void {
        if (this.name) {

            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Assalamu caleykum, bilaa magac ayaan ahay :(')
        }
    }

}

let user1: Greetable;

user1 = new Person('Madinah Maxamed');
// user1.name = 'new name'; // Fails due to readonly
user1.greet('Assalamu caleykum, magaceygu waa');