/**
 * Generic function with type constraints
 * Syntax: function<T extends Type,U extends Type>(arg1:T, arg2:U)
 */

/**
 * Generic function definition.
 * Return type is the "intersection" of the parameters
 * @param objA T
 * @param objB U
 * @returns T & U
 */
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Madinah' }, { age: 7 });
console.log(mergedObj);

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
console.log(countAndDescribe(['Mikal', 'Madinah'])); // Call with and array
console.log(countAndDescribe([])); // Call with empty array
// console.log(countAndDescribe(10)); // This will fail, as number type doesn't have length property

export { };