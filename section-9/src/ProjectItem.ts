import { autobind } from "./autobind.js";
import { Component } from "./Component.js";
import { IDraggable } from "./interfaces/IDraggable.js";
import { Project } from "./Project.js";

// ProjectItem class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements IDraggable {
    private project: Project;

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();
    }

    @autobind
    dragStartHandler(event: DragEvent): void {
        console.log('drag start', event);
    }

    @autobind
    dragEndHandler(event: DragEvent): void {
        console.log('drag end', event);
    }

    get persons() {
        if (this.project.people === 1)
            return '1 person assigned';
        return `${this.project.people} persons assigned`;
    }

    configure(): void {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }

    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.persons;
        this.element.querySelector('p')!.textContent = this.project.description;

    }
}

export { ProjectItem };
