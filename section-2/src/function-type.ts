/**
 * Functions as Types
 * @param n1 number
 * @param n2 number
 * @returns number
 */
function add(n1: number, n2: number): number {
    return n1 + n2;
}

/**
 * combineValues is a pointer to a function
 * But has the issue that this variable can be set to any other value.
 * combineValues = 5; 
 * Thus the need for explicitly setting the type as Function
// let combineValues: Function = add;

/**
 * When defining a Function as Type, following method better
 */
let combineValues: (a: number, b: number) => number = add;

/**
 * Another issue with this is that, the variable can be assigned to another function
 * combineValues = anotherFunction
 */

console.log('Result:', combineValues(70, 18));

export { };