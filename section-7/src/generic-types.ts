/**
 * Built-it Generic types are
 * Syntax: MainType<subType>
 * E.g: Array<string> = string[]
 */
// const names = ['Mikal','Madinah'];
// const names: Array<string> = [];
// Due to the defined type, the built-in methods for the type is available
// names[0].split('-').join(' ');

// Promise are by default generics, but types can be defined, such that the expected result is know.
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Task is done!');
    }, 4000);
});

promise.then(result => console.log(result.split(' ').join('')));

export { };