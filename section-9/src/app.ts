import { ProjectInput } from "./ProjectInput.js";
import { ProjectList } from "./ProjectList.js";
import { ProjectState } from "./ProjectState.js";

const projectState = ProjectState.getInstance();
const projectInput = new ProjectInput(projectState);
const activeProjectList = new ProjectList('active', projectState);
const finishedProjectList = new ProjectList('finished', projectState);

export { };