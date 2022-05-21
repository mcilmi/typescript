function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log('Logger()');
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, elementId: string) {
    console.log('WithTemplate FACTORY');
    return function (constructor: any) {
        console.log('WithTemplate()');
        const p = new constructor();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = template;
            const title = element.querySelector('h1');
            if (title) {
                title.innerHTML = p.name;
            }
        }
    }
}

/**
 * Rendering order: 
 *  Factories are rendered TOP-DOWN: FIFO - QUEUE
 *  Decorator Functions are rendered BOTTOM-UP: LIFO - STACK
 * Sort of 
 */
@Logger('Waan ku salaamay Madiinay!')
@WithTemplate('<h1>Waan ku salaamay Madiinay</h1>', 'app')
class Person {
    name = 'Madinah Maxamed Cilmi';
    constructor() {
        console.log('Creating a new Person object');
    }
}

const person = new Person();
console.log(person);

/**
 * Property decorators are rendered on class definition
 * and not when it is instantiated.
 * @param target instance property
 * @param propertyName 
 */
function Log(target: any, propertyName: string) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

class Product {
    @Log
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    set price(value: number) {
        if (value < 1) throw new Error('Invalid price - no thing as free lunch!');
        this._price = value;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}

export { };