/**
 * Generic functions
 * Syntax: function<T,U>(arg1:T, arg2:U)
 */

/**
 * A simple function to merge two objects
 * @param objA Object
 * @param objB Object
 * @returns Object
 */
// function merge(objA: Object, objB: Object): Object {
//     return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'Madinah' }, { age: 7 }));

/**
 * TS doesn't know the content of the merged object
 *  Solution: make the function generic and specify the types.
 * */
// const mergedObj = merge({ name: 'Madinah' }, { age: 7 });
// mergedObj.name; // This property is inaccessible for TS.
/**
 * Generic function definition.
 * Return type is the "intersection" of the parameters
 * @param objA T
 * @param objB U
 * @returns T & U
 */
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Madinah' }, { age: 7 });
console.log(mergedObj.name); // This property is now naccessible for TS.
