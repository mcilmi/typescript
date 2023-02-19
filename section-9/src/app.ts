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

// Status enum
enum ProjectStatus {
    Active,
    Finished
}

// Project type
class Project {
    constructor(public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus) {

    }
}

type Listener<T> = (items: T[]) => void;

class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>): void {
        this.listeners.push(listenerFn);
    }
}

// Project state management
class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
        super();
    }

    static getInstance(): ProjectState {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            numOfPeople,
            ProjectStatus.Active);

        this.projects.push(newProject);

        // Notify the listeners
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

const projectState = ProjectState.getInstance();

// Component base class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
        this.templateElement = <HTMLTemplateElement>document.getElementById(templateId)!;
        this.hostElement = <T>document.getElementById(hostElementId)!;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <U>importedNode.firstElementChild;
        // Add ID to the element for css styling
        if (newElementId) this.element.id = newElementId;

        this.attach(insertAtStart);
    }

    private attach(insertAtBegin: boolean): void {
        this.hostElement.insertAdjacentElement(insertAtBegin ? "afterbegin" : "beforeend", this.element);
    }

    abstract configure?(): void;
    abstract renderContent(): void;
}

// Project list class
class ProjectList extends Component<HTMLDivElement, HTMLElement> {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`)
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    configure(): void {
        // Add listener
        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(project => {
                if (this.type === 'active') {
                    return project.status === ProjectStatus.Active;
                }
                return project.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }

    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
    }

    private renderProjects() {
        const listElement = <HTMLUListElement>document.getElementById(`${this.type}-projects-list`)!;
        // Clear content before rendering
        listElement.innerHTML = '';
        for (const projectItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, projectItem);
        }
    }
}

// ProjectItem class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
    private project: Project;

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();
    }

    get persons() {
        if (this.project.people === 1) return '1 person assigned';
        return `${this.project.people} persons assigned`;
    }

    configure(): void {

    }

    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.persons;
        this.element.querySelector('p')!.textContent = this.project.description;

    }
}
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>  {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input')
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

        const validatableTitle: Validatable = { value: enteredTitle, required: true, minLength: 5 }
        const validatableDescription: Validatable = { value: enteredDescription, required: true, minLength: 5 };
        const validatablePeople: Validatable = { value: +enteredPeople, required: true, min: 1, max: 100 }

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
            projectState.addProject(title, description, people);
            this.clearInputs();
        }
    }

}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');