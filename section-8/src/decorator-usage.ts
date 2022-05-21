function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, elementId: string) {
    return function (constructor: any) {
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

// @Logger('Waan ku salaamay Madiinay!')
@WithTemplate('<h1>Waan ku salaamay Madiinay</h1>', 'app')
class Person {
    name = 'Maxamed';
    constructor() {
        console.log('Creating a new Person object');
    }
}

const person = new Person();
console.log(person);

export { };
