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

@Logger('Waan ku salaamay Madiinay!')
@WithTemplate('<h1>Waan ku salaamay Madiinay</h1>', 'app')
class Person {
    name = 'Madinah Maxamed Cilmi';
    constructor() {
        console.log('Creating a new Person object');
    }
}

const person = new Person();

export { };