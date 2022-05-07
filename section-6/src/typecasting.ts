/**
 * Typecasting
 */

// Typescript will translate this type to HTMLParagraphElement
// const paragraphByType = document.querySelector('p');

// Typescript will translate this type to HTMLElement
// const paragraphById = document.getElementById('message-output');

// Typescript will translate this type to HTMLElement
// const userInput = document.getElementById('user-input');
// .value does not existing on HTMLElement, it is not specific enough.
// userInput.value = "Hello world";

/**
 *  Using typecasting for specific input-type
 *  Syntax 1: <HTMLInputElement>element
 *  Syntax 2: element as HTMLInputElement
 *  Both syntax are equivalent
 * */
const userInput = document.getElementById('user-input') as HTMLInputElement;
userInput.value = "Hello world";

export { }