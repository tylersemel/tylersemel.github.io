import { ProjectView } from "./js/project-view";
import { Project } from "./js/project";
import "./styles.css";

const projects = [
    new Project('Random Forests', 'ee', ['unity'], 'A screenshot of Random Forests gameplay.')


];

ProjectView.createProjectDivs(projects);

const projectDivs = document.querySelectorAll('.project');

for (const div of projectDivs) {
    div.addEventListener('click', handleClickProject);
}

function handleClickProject() {
    alert('hi');
}