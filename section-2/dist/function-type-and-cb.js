"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2) {
    return n1 + n2;
}
let combineValues = add;
console.log('Result:', combineValues(70, 18));
/**
 * Function type can also be used for callbacks
 */
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(9, 7, (result) => {
    console.log('addAndHandle:', result);
});
