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

    private gatherUserInput(): [string, string, number] {
        const enteredTitle = this.titleInputElement.value.trim;
        const enteredDescription = this.descriptionInputElement.value.trim;
        const enteredPeople = this.peopleInputElement.value.trim;

        if (enteredTitle.length === 0
            || enteredDescription.length === 0
            || enteredPeople.length === 0) {

        }
    }

    @autobind
    private submitHandler(event: Event): void {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        console.log("this.titleInputElement:", this.titleInputElement.value);
    }

    private configure(): void {
        this.formElement.addEventListener("submit", this.submitHandler);
    }

    private attach(): void {
        this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
    }
}

const projectInput = new ProjectInput();