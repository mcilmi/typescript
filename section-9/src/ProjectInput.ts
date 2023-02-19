import { autobind } from "./autobind.js";
import { Component } from "./Component.js";
import { IValidatable } from "./interfaces/IValidatable.js";
import { ProjectState } from "./ProjectState.js";

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor(private projectState: ProjectState) {
        super('project-input', 'app', true, 'user-input');
        // Configure
        this.configure();
    }

    configure(): void {
        // Populate form fields
        this.titleInputElement = <HTMLInputElement>this.element.querySelector("#title");
        this.descriptionInputElement = <HTMLInputElement>this.element.querySelector("#description");
        this.peopleInputElement = <HTMLInputElement>this.element.querySelector("#people");

        this.element.addEventListener("submit", this.submitHandler);
    }

    renderContent(): void {
    }

    private validate(validatableInput: IValidatable): boolean {
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
            isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
        }

        if (validatableInput.min != null
            && typeof validatableInput.value === 'number') {
            isValid = isValid && validatableInput.value >= validatableInput.min;
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

        const validatableTitle: IValidatable = { value: enteredTitle, required: true, minLength: 5 };
        const validatableDescription: IValidatable = { value: enteredDescription, required: true, minLength: 5 };
        const validatablePeople: IValidatable = { value: +enteredPeople, required: true, min: 1, max: 100 };

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
            this.projectState.addProject(title, description, people);
            this.clearInputs();
        }
    }

}

export { ProjectInput };
