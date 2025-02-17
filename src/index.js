import "./styles.css";
import { HomeView } from "./js/home";
import { ProjectsView } from "./js/projects";
const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', handleClickHome);

const contentDiv = document.querySelector("#content");

HomeView.displayHome(contentDiv);

const projectsBtns = document.querySelectorAll('.projects-btn');

for (const btn of projectsBtns) {
    console.log(btn);
    btn.addEventListener('click', handleClickProjects);
}

const projectBtns = document.querySelectorAll('.project-btn');

for (const btn of projectBtns) {
    btn.addEventListener('click', handleClickProject);
}



function clearContent() {
    contentDiv.replaceChildren();
}

function handleClickHome() {
    clearContent();
    HomeView.displayHome(contentDiv);
    const projectsBtn = document.querySelector("#projects .projects-btn");
    projectsBtn.addEventListener('click', handleClickProjects);
}

function handleClickProjects() {
    clearContent();
    ProjectsView.displayProjects(contentDiv);
    
}

function handleClickProject(e) {
    // clearContent();
    console.log(e.target);
}