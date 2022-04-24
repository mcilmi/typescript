"use strict";
/**
 * Object type inference
 *
 * Cons: Generic type
 * Pros: TypeScript can see the type content
 * Best practices: Better to be more specific in type setting.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// const person = {
//     magac: "Maxamed Cilmi",
//     da: 35
// };
/**
 * Explicit creation of NEW javascript object
 * Cons: TypeScript looses the Properties of the type
 * Best practices: Not recommended.
 */
// const person: object = {
//     magac: "Maxamed Cilmi",
//     da: 35
// };
/**
 * Litteral object type
 *  Cons: generic type. Properties is derived by inference.
 *  Pros: TypeScript can see the type Properties. Properties and their types can be described.
 *  Best practices: Don't define the litteral object property types. Rely on inference.
 */
// const person: {
//     magac: string,
//     da: number
// } = { 
const person = {
    magac: "Maxamed Cilmi",
    da: 35
};
console.log(person);
