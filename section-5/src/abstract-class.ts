abstract class Department {
    protected employees: string[] = [];
    constructor(protected id: number, protected name: string = 'Accounting') {
    }
    // Static method

    static createEmployee(name: string) {
        return { name: name }
    }

    // Define abstract method - force sub-classes to implement
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    // private printEmployeeInformation() {
    //     console.log('\t# employees', this.employees.length);
    //     console.log('\temployees', this.employees);
    // }
}

// Specialized class type
class AccountingDepartment extends Department {
    private lastReport: string;
    // Static property
    static fiscalYear = 2022;

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

    describe() {
        console.log('Department ID: ' + this.id);
        console.log('Department name: ' + this.name);
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
accountingDepartment.describe();

export { };