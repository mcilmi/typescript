/**
 * Generic function with keyof
 * Syntax: 
 */


interface Lenghty {
    length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
    let descriptionText = "This is the description";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + ' elements';
    } else {
        descriptionText = "Got no value.";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hello there')); // Call with String

// TS will complain, as key cannot be used as index of obj
// function extractAndConvert<T extends object, U extends string>(obj: T, key: U) {
//     return key + ": " + obj[key];
// }

// Solution: Use keyof as type constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return key + ": " + obj[key];
}

console.log(extractAndConvert({ name: 'Madinah' }, 'name'));

export { };
