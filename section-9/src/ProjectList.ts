import { IDragTarget } from "./interfaces/IDragTarget.js";
import { ProjectStatus } from "./enums/ProjectStatus.js";
import { ProjectState } from "./ProjectState.js";
import { ProjectItem } from "./ProjectItem.js";
import { Project } from "./Project.js";
import { Component } from "./Component.js";
import { autobind } from "./autobind.js";


// Project list class
class ProjectList extends Component<HTMLDivElement, HTMLElement> implements IDragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished', private projectState: ProjectState) {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    @autobind
    dragOverHandler(event: DragEvent): void {
        const listElement = this.element.querySelector('ul');
        listElement.classList.add('droppable');
    }

    @autobind
    dropHandler(event: DragEvent): void {
        throw new Error("Method not implemented.");
    }

    @autobind
    dragLeaveHandler(event: DragEvent): void {
        const listElement = this.element.querySelector('ul');
        listElement.classList.remove('droppable');
    }

    configure(): void {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drag', this.dropHandler);

        // Add listener
        this.projectState.addListener((projects: Project[]) => {
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

export { ProjectList };