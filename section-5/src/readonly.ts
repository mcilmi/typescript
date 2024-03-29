class Department {
    private readonly name: string
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    // this keyowrd will always point to the proper instance
    describe() {
        console.log('Department: ' + this.name);
        this.printEmployeeInformation();
        // this.name = 'Name2'; // Attemp reassigning the name will fail.
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    private printEmployeeInformation() {
        console.log('\t# employees', this.employees.length);
        console.log('\temployees', this.employees);
    }
}

// Init object from class blueprint
const accounting = new Department('Accounting');
accounting.addEmployee('Maxamed Cilmi');
accounting.addEmployee('Madinah');
accounting.addEmployee('Mikal');

accounting.describe();

export { };