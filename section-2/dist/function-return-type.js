"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Add two numbers together.
 * Function return type can be explicitly set,
 * even though TS is able to infere the return type, it is a best-practices to
 * explicitly set it.
 * @param n1 number
 * @param n2 number
 * @returns number
 */
function add(n1, n2) {
    return n1 + n2;
}
console.log('Result:', add(1, 2));
