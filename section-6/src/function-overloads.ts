/**
 * Function overloading, defining multiple signatures and behaviors
 */

type Combinable = string | number;

// Define overloads
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: string, b: number): string
function add(a: number, b: string): string
function add(a: Combinable, b: Combinable): Combinable {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result1 = add(13, 2);
console.log('number:', result1.toFixed(1));
const result2 = add('Hello ', 'Xamar!');
console.log('string:', result2);

export { };