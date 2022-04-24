/**
 * When a type is not known before hand, unknown, can be used, which is a core TS type.
 * Any data type can be stored in such variable, and TS will not complain.
 */
let userInput: unknown;
let userName: string;


// Unknown type can be assigned any valid datatypes.
userInput = 7;
userInput = 'Madinah';

// But it is not possible to treat it as *any*-type
// userName = userInput; // Uknown cannot be assigned to any other data type

/**
 * If this above is desired. It is possible, but then the type as to be checked
 */
if (typeof userInput === 'string') {
    userName = userInput;
}

export { };

