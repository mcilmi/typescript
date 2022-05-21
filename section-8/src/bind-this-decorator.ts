function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
    }
}

function WithTemplate(template: string, elementId: string) {
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(...args: any[]) {
                super();
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = template;
                    const title = element.querySelector('h1');
                    if (title) {
                        title.innerHTML = this.name;
                    }
                }
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

function AccessorLog(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function MethodLog(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function ParameterLog(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @AccessorLog
    set price(value: number) {
        if (value < 1) throw new Error('Invalid price - no thing as free lunch!');
        this._price = value;
    }

    @MethodLog
    getPriceWithTax(@ParameterLog tax: number) {
        return this._price * (1 + tax);
    }
}

function AutoBindThis(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    const adjsDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }

    return adjsDescriptor;
}

class Printer {
    message: string = "This is an important message, you better read it!";

    @AutoBindThis
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

export { };