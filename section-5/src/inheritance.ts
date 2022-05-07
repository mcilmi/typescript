class Department {
    private employees: string[] = [];
    constructor(private id: number, private name: string = 'Accounting') {
    }

    // this keyowrd will always point to the proper instance
    describe() {
        console.log('Department ID: ' + this.id);
        console.log('Department name: ' + this.name);
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

// Specialized class type
class ITDepartment extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
    }
}

// Init object from class blueprint
const itDepartment = new ITDepartment(1, ['Maxamed']);
itDepartment.addEmployee('Maxamed Cilmi');
itDepartment.addEmployee('Mikal');

console.log(itDepartment);


class AccountingDepartment extends Department {
    constructor(id: number, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(report: string) {
        this.reports.push(report);
    }

    printReports() {
        console.log(this.reports);
    }
}

const accountingDepartment = new AccountingDepartment(2, ['Annual-revenue', 'Quater revenue']);
accountingDepartment.addEmployee('Madinah');
console.log(accountingDepartment);
accountingDepartment.printReports();

export { };