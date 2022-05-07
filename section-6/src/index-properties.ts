/**
 * Index properties
 * Syntax: [keyName:string]:type
 */

const userInput = document.getElementById('user-input') as HTMLInputElement;
userInput.value = "Hello world";

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email",
    password: "Min length is 10 characters"
};

console.log('Email error:', errorBag.email);
console.log('Password error:', errorBag.password);

export { };