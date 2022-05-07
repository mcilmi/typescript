/**
 * Type guards. Used to check if properties exists before using them.
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

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// This will not work. Typeguard is required.
function add(a: Combinable, b: Combinable) {
    // Typeguard using typeof
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

type UknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UknownEmployee) {
    // This will work, because it is a shared property
    console.log('Name: ' + employee.name);

    /**
     * This will fail, because permissions is not a shared property.
     * Fix: Typeguard is required
     * */
    if ('permissions' in employee) {
        console.log('permissions: ' + employee.permissions);
    }
}
// This will work
// printEmployeeInformation(e1);

// This will also work, due to the typeguard on .permissions
// printEmployeeInformation({ name: 'Mikaal', startDate: new Date() });

/**
 * When working with classes, typeguards can be implemented by using "instanceof" operator
 */

class Car {
    drive() {
        console.log('Driving a car....');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck....');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo #' + amount);
    }
}

// A union type of the above class types
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    // The .drive() method exists on both types
    vehicle.drive();

    /**
     * The .loadCargo() method exists only in Truck type
     * Fix: typeguard instanceof
     *  */
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

export { };