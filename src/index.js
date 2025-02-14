import "./styles.css";
import { HomeView } from "./js/home";
import { ProjectsView } from "./js/projects";
const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', handleClickHome);

const projectsBtn = document.querySelectorAll('.projects-btn');

for (const btn of projectsBtn) {
    btn.addEventListener('click', handleClickProjects);
}


const contentDiv = document.querySelector("#content");

// HomeView.displayHome(contentDiv);

function clearContent() {
    contentDiv.replaceChildren();
}

function handleClickHome() {
    clearContent();
    HomeView.displayHome(contentDiv);
}

function handleClickProjects() {
    clearContent();
    ProjectsView.displayProjects(contentDiv);
}