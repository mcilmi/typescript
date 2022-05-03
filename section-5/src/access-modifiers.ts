class Department {
    private employees: string[] = [];

    constructor(private name: string) {
    }

    // this keyowrd will always point to the proper instance
    describe() {
        console.log('Department: ' + this.name);
        this.printEmployeeInformation();
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

