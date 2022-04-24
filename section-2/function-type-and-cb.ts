function add(n1: number, n2: number): number {
    return n1 + n2;
}

let combineValues: (a: number, b: number) => number = add;

console.log('Result:', combineValues(70, 18));


/**
 * Function type can also be used for callbacks
 */

function addAndHandle(n1: number, n2: number, cb: (num: number) => void): void {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(9, 7, (result) => {
    console.log('addAndHandle:', result);
});

export { }