"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tuples are type of fixed-length-type array
 * TypeScript cannot infere the content and structure of a tuple
 * thus it is necessary to explicitly state the type.
 * If used properly, the befinit is that the sub element type is enforced
 */
const person = {
    magac: "Maxamed Cilmi",
    da: 35,
    hobbies: ['Coding', 'Aqrin'],
    role: [1, 'developer']
};
/**
 * As tuple is an array-type, .push is available
 * and can cause issues if dev is not carefull.
 */
// This would work. But defeats the purpose of this tuple type definition
person.role.push('admin');
// It is better to assign values, using the litteral method, as tsc will catch this.
// person.role[0] = 'admin'; // This will fail
// person.role[1] = 'admin'; // This will work
// person.role = [1, 'admin']; // This will work
// person.role = [1, 'admin', 'developer']; // This will fail
console.log(person);
