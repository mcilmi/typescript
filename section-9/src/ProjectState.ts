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

        // Notify the listeners
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

export { ProjectState };