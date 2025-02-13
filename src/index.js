import { ProjectView } from "./js/project-view";
import { Project } from "./js/project";
import "./styles.css";

const projects = [
    new Project('Random Forests', 'ee', ['unity'], 'A screenshot of Random Forests gameplay.'),
    new Project('CoffeeMaker', 
        "CoffeeMaker is a system for customers to order and pick up drinks from the staff that create and make them." + 
        "The system has functionality for creating a customer account, logging in, staff management, placing a drink order for a customer, seeing a customer's drink history, and updating inventory." +
        "This system was pre-established and we were tasked with adding all of the functionality listed above. I worked on this project for three months with four other software developers." +  
        "We used Java, HTML, CSS, AngularJS, Hibernate, Spring Boot, MySQL, and RESTful API to deliver the final product.", 
        ["Java", "HTML", "CSS", "React", "SpringBoot", "Hibernate"],
        "A screenshot of the CoffeeMaker system.")
    ];

ProjectView.createProjectDivs(projects);

const projectDivs = document.querySelectorAll('.project');

for (const div of projectDivs) {
    div.addEventListener('click', handleClickProject);
}

function handleClickProject() {
    alert('hi');
}