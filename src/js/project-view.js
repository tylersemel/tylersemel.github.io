import RandomForests from '../images/randomforests.png';
import CoffeeMaker from '../images/coffeemaker2.png';


export const ProjectView = (() => {
    const projectsDiv = document.querySelector('#projects');
    const title = projectsDiv.querySelector('.title');
    title.textContent = 'Featured Projects'
    const projectsContainer = projectsDiv.querySelector('#projects-container');

    function createProjectDiv() {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        projectDiv.innerHTML =
        `<div class="info">
            <h3 class="project-title"></h3>
            <p></p>
            <ul class="tools">
            </ul>
        </div>
        <div class="img-container">
            
        </div>`

        return projectDiv;
    }

    function fillProjectDiv(div, project) {
        const projectTitle = div.querySelector('.project-title');
        const description = div.querySelector('p');
        const toolsUl = div.querySelector('.tools');
        const imgContainer = div.querySelector('.img-container');
        const img = document.createElement('img');

        projectTitle.textContent = project.title;
        description.textContent = project.description;

        for (const tool of project.tools) {
            const toolLi = document.createElement('li');
            toolsUl.appendChild(toolLi);
            toolLi.textContent = tool;
        }

        console.log(project.img);
        img.src = project.img;
        img.setAttribute('alt', project.imgAlt);
        imgContainer.appendChild(img);
    }

    function createProjectDivs(projects) {
        for (const project of projects) {
            const projectDiv = createProjectDiv();
            
            fillProjectDiv(projectDiv, project);
            projectsContainer.appendChild(projectDiv);
        }

        projectsDiv.appendChild(projectsContainer);
    }

    return { createProjectDivs };

})();