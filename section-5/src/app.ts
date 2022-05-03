
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

// Copying object and this keyword
const accountingCopy = { describe: accounting.describe };

/**  
 * When accountingCopy.describe is called. 
 * The this keyword is pointing to accountingCopy obj, and it does not have the
 * name field.
 * */
accountingCopy.describe();
