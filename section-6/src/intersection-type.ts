/**
 * Intersection types allows us to combine types. An intersection type combines multiple types into one.
 * Intersection types can also be implemented by interfaces, but this way is more succent.
 * The intersection types are defined by the & operator, e.g. type1 & type2
 */

type Admin = {
    name: string;
    permissions: string[]
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Madiinah",
    permissions: ["manage:all"],
    startDate: new Date()
};

console.log('e1', e1);

export { };