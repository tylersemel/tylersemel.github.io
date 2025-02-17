export const ProjectView = (() => {
    const randomForests = 
        `<div class="project-container">
                <h1 class="project-title">Random Forests</h1>
                <ul class="tags-container">
                    <li>Unity</li>
                    <li>Unit Tests</li>
                </ul>
                <p class="short-desc">Video game introducing kids to machine learning concepts.</p>
                <div class="project-links-container">
                    <span><em>Check out the code base here:</em></span>
                    <ul class="project-links">
                        <li class="project-link"><a href="">GitHub</a></li>
                    </ul>
                </div>
                <div class="project-img-container">
                    <iframe src="https://drive.google.com/file/d/1F69dzjAvmVRuN1sE2Ln3I19f8OXanx8Y/preview" width="640" height="360" allow="autoplay"></iframe>
                    <!-- <iframe src="https://drive.google.com/file/d/1cfifUUYyLhNqDkU4NYrP5WgkH_vPuL5B/preview" width="640" height="480" allow="autoplay"></iframe> -->
                </div>
            </div>`;
    const coffeeMaker = ``;
    const todoList = ``;
    const recipeSocial = ``;
    const dreamFiles = ``;


    function displayProject(project, contentDiv) {
        const body = document.querySelector('body');
        body.style.backgroundColor = "white";
        
        switch(project) {
            case 'random-forests':
                contentDiv.innerHTML = randomForests;
                break;
            case 'coffeemaker':
                contentDiv.innerHTML = coffeeMaker;
                break;
            case 'todo-list':
                contentDiv.innerHTML = todoList;
                break;
            case 'recipe-social':
                contentDiv.innerHTML = recipeSocial;
                break;
            case 'dream-files':
                contentDiv.innerHTML = dreamFiles;
                break;
            default: 
                contentDiv.textContent = "Nothing to see here";
        }
    }

    return { displayProject };
})();