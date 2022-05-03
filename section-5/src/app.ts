
class Department {
    private name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log('Department: ' + this.name);
    }
}

// Init object from class blueprint

const accounting = new Department('Accounting');
accounting.describe();
