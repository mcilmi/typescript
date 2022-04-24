/**
 * Enums are custom data type that contain predetermined list items.
 */
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    magac: "Maxamed Cilmi",
    da: 35,
    hobbies: ['Coding', 'Aqrin'],
    // role: 1,
    role: Role.ADMIN
};

/**
 * If the role is defined as follows. The developer need to have knowlege of the naming, 
 * availability and the mapping in working memory.
 * Furthermore, the person.role, can be assigned to any number, thus makes this approach unreleable.
 * */
// if (person.role === ADMIN) {
//     console.log('You are an admin!');
// } else {
//     console.log('You are not an admin!');
// }


if (person.role === Role.ADMIN) {
    console.log('You are an admin!');
} else {
    console.log('You are not an admin!');
}

console.log(person);

export { };