
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    // this keyowrd will always point to the proper instance
    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
}

// Init object from class blueprint
const accounting = new Department('Accounting');
accounting.describe();

// Copying object and align it will the proper structure of the source object
const accountingCopy = { name: 'Maxamed', describe: accounting.describe };

/**  
 * When accountingCopy.describe is called. 
 * The this keyword is pointing to accountingCopy obj, and it does not have the
 * name field.
 * */
accountingCopy.describe();
