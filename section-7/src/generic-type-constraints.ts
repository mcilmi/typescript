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
// console.log(mergedObj.hobbies); // .hobbies doesn't exist

// const mergedObj = merge({ name: 'Madinah' }, 30); // Second argument fails the type constraint.

export { };