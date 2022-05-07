/**
 * Nullish coalescing, when you don't know for certain if a value is null or not.
 * Syntax: property ?? defaultValue
 */

const fetchedUserData = {
    id: 1,
    name: 'Madinah',
    job: { title: 'Accountant', description: 'Awesome accountant' }
};

console.log(fetchedUserData);
console.log(fetchedUserData?.job?.title);

const userInput = undefined;
// const userInput = null;
// const userInput = 'This is my honest input!';
const storedData = userInput ?? 'default input value';

console.log('storedData:', storedData);

export { };
