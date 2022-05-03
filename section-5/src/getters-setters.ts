class Department {
    protected employees: string[] = [];
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

class AccountingDepartment extends Department {
    private lastReport: string;
    constructor(id: number, private reports: string[]) {
        super(id, 'Accounting');
    }

    get mostRecentReport(): string {
        if (this.lastReport) return this.lastReport;
        throw new Error('No report found!');
    }

    set mostRecentReport(value: string) {
        if (!value) throw new Error('Report is undefined!');
        this.addReport(value);
    }

    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if (name.toLowerCase() === 'lax') {
            throw new Error('Lax xisaabiye ma noqon karto, bilaahi caleykum!')
        }
        this.employees.push(name);
    }
}

const accountingDepartment = new AccountingDepartment(2, ['Annual-revenue']);
accountingDepartment.addEmployee('Madinah');
accountingDepartment.addReport('2nd Quater revenue');
console.log(accountingDepartment);
accountingDepartment.printReports();
console.log('most recent report:', accountingDepartment.mostRecentReport);
accountingDepartment.mostRecentReport = '3rd Quater revenue';
console.log('most recent report:', accountingDepartment.mostRecentReport);
accountingDepartment.printReports();

export { };