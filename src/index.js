import "./styles.css";
import "./images/coffeemaker/coffeemaker2.png";
import "./images/coffeemaker/UML.png";
import "./images/todolist.png";
import "./images/recipesocial.png";
import { HomeView } from "./js/home";
import { ProjectsView } from "./js/projects";
import { ProjectView } from "./js/project";


const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', handleClickHome);
const projectsBtn = document.querySelector('header .projects-btn');
projectsBtn.addEventListener('click', handleClickProjects);
const contentDiv = document.querySelector("#content");

handleClickHome();

function clearContent() {
    contentDiv.replaceChildren();
}

function handleClickHome() {
    clearContent();
    HomeView.displayHome(contentDiv);

    const projectsBtn = contentDiv.querySelector("#projects .projects-btn");
    projectsBtn.addEventListener('click', handleClickProjects);

    const projectBtns = contentDiv.querySelectorAll('.project-btn');

    for (const btn of projectBtns) {
        btn.addEventListener('click', handleClickProject);
    }
}

function handleClickProjects() {
    clearContent();
    ProjectsView.displayProjects(contentDiv);

    const projectCards = contentDiv.querySelectorAll(".projects-container .project");
    for (const projectCard of projectCards) {
        projectCard.addEventListener("click", handleClickProject);
    }
}

function handleClickProject(e) {
    clearContent();
    const projectElement = e.target.closest('.project') ||
                        e.target.closest('.project-btn');
    const project = projectElement.getAttribute("data-project");
    ProjectView.displayProject(project, contentDiv);
}