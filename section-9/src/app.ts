//Validation interface
interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

// autobind decorator
function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    formElement: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById("project-input")!;
        this.hostElement = <HTMLDivElement>document.getElementById("app")!;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = <HTMLFormElement>importedNode.firstElementChild;
        // Add ID to the element for css styling
        this.formElement.id = "user-input";

        // Populate form fields
        this.titleInputElement = <HTMLInputElement>this.formElement.querySelector("#title");
        this.descriptionInputElement = <HTMLInputElement>this.formElement.querySelector("#description");
        this.peopleInputElement = <HTMLInputElement>this.formElement.querySelector("#people");

        // Configure
        this.configure();
        // Attach
        this.attach();
    }

    private validate(validatableInput: Validatable): boolean {
        let isValid = true;

        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0;
        }

        if (validatableInput.minLength != null
            && typeof validatableInput.value === 'string') {
            isValid = isValid && validatableInput.value.length > validatableInput.minLength;
        }

        if (validatableInput.maxLength != null
            && typeof validatableInput.value === 'string') {
            isValid = isValid && validatableInput.value.length < validatableInput.maxLength;
        }

        if (validatableInput.min != null
            && typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value > validatableInput.min;
        }

        if (validatableInput.max != null
            && typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value < validatableInput.max;
        }

        return isValid;
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value.trim();
        const enteredDescription = this.descriptionInputElement.value.trim();
        const enteredPeople = Number(this.peopleInputElement.value.trim());

        const validatableTitle: Validatable = { value: enteredTitle, required: true, minLength: 5 }
        const validatableDescription: Validatable = { value: enteredDescription, required: true, minLength: 5 };
        const validatablePeople: Validatable = { value: +enteredPeople, required: true, min: 50, max: 100 }

        if (!this.validate(validatableTitle)
            || !this.validate(validatableDescription)
            || !this.validate(validatablePeople)) {
            alert("Invalid input, please try again.");
            throw new Error("Please try again");
        }
        return [enteredTitle, enteredDescription, enteredPeople];
    }

    private clearInputs(): void {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }

    @autobind
    private submitHandler(event: Event): void {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(title, description, people);
            this.clearInputs();
        }
    }

    private configure(): void {
        this.formElement.addEventListener("submit", this.submitHandler);
    }

    private attach(): void {
        this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
    }
}

const projectInput = new ProjectInput();