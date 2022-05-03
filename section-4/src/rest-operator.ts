/**
 * Parameters are defined
 * @param n1 number
 * @param n2 number
 * @returns number
 */
function add(n1: number, n2: number): number {
    return n1 + n2;
}


/**
 * Rest parameters, enables accepting unlimited amount of parameters.
 * E.g. it is used in console.log
 * @param numbers number[]
 * @returns number
 */
function addArbitaryNumbers(...numbers: number[]): number {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
}

console.log(addArbitaryNumbers(1, 2, 3, 4, 5));

export { }