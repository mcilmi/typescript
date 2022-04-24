"use strict";
/**
 * Enums are custom data type that contain predetermined list items.
 */
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
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
}
else {
    console.log('You are not an admin!');
}
console.log(person);
