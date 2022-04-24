/**
 * Never type
 * A type that can NEVER occur.
 */


let userInput: unknown;
let userName: string;


// Unknown type can be assigned any valid datatypes.
userInput = 7;
userInput = 'Madinah';

if (typeof userInput === 'string') {
    userName = userInput;
}

// This utility function does NEVER return anything. Thus it is better to state it explicitly.
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occured:', 5);

export { };