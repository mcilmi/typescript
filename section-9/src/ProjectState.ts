import { ProjectStatus } from "./enums/ProjectStatus.js";
import { Project } from "./Project.js";
import { State } from "./State.js";

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
        this.updateListerners();

    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
        const project = this.projects.find(p => p.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListerners();
        }
    }

    private updateListerners(): void {
        // Notify the listeners
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

export { ProjectState };