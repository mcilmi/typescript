"use strict";
/**
 * Never type
 * A type that can NEVER occur.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let userInput;
let userName;
// Unknown type can be assigned any valid datatypes.
userInput = 7;
userInput = 'Madinah';
if (typeof userInput === 'string') {
    userName = userInput;
}
// This utility function does NEVER return anything. Thus it is better to state it explicitly.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured:', 5);
