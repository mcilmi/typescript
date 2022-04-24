/**
 * Type Alias
 * Custom type definition, best used with a union type.
 * Can be used to define complex type definitons
 */

type Combinable = number | string;

type User = { name: string; age: number };

function combine(input1: Combinable, input2: Combinable) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const number1 = 10;
const number2 = ' types of people in the world who know binary numbers!';

console.log(combine(number1, number2));
console.log(combine(3, 14));

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return user.age > checkAge;
}
const user1: User = { name: 'Maxamed', age: 35 };

console.log(user1);
console.log('is older than 34: ', isOlder(user1, 34))

export { };