/**
 * Union types
 * When it is required to work with multiple datatypes.
 * unions are defined as type1|type2
 */

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const number1 = 10;
const number2 = ' types of people in the world who know binary numbers!';

console.log(combine(number1, number2));
console.log(combine(3, 14));

export { }