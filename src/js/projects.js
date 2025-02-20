export const ProjectsView = (() => {
    function displayProjects(contentDiv) {
        const body = document.querySelector('body');
        body.style.backgroundColor = "rgb(248, 248, 248)";

        contentDiv.innerHTML = 
        ` <h1 class="main-title projects">Projects</h1>
            <section class="projects-container">
                <article class="project" data-project="random-forests">
                    <h2 class="title">Random Forests</h2>
                    <p class="description">Video game introducing kids to machine learning concepts.</p>
                    <ul class="tags-container">
                        <li>Unity</li>
                        <li>Unit Tests</li>
                    </ul>
                </article>
                <article class="project" data-project="coffeemaker">
                    <h2 class="title">CoffeeMaker</h2>
                    <p class="description">Drink ordering system.</p>
                    <ul class="tags-container">
                        <li>Java</li>
                        <li>REST API</li>
                        <li>MySQL</li>
                        <li>Spring Boot</li>
                        <li>Hibernate</li>
                    </ul>
                </article>
                <article class="project" data-project="todo-list">
                    <h2 class="title">To Do List</h2>
                    <p class="description">Create and manage to do lists, kanban style.</p>
                    <ul class="tags-container">
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </article>
                <article class="project" data-project="recipe-social">
                    <h2 class="title">Recipe Social</h2>
                    <p class="description">Progressive Web App for posting recipes and sharing with friends.</p>
                    <ul class="tags-container">
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>MySQL</li>
                    </ul>
                </article>
                <article class="project" data-project="dream-files">
                    <h2 class="title">Dream Files</h2>
                    <p class="description">Puzzle-platformer video game navigating through a dream-scape.</p>
                    <ul class="tags-container">
                        <li>Unreal Engine 5</li>
                        <li>C++</li>
                    </ul>
                </article>
                <article class="project" data-project="jump-game">
                    <h2 class="title">Jump!</h2>
                    <p class="description">A simple game to jump on platforms.</p>
                    <ul class="tags-container">
                        <li>Unreal Engine 5</li>
                        <li>C++</li>
                    </ul>
                </article>
            </section>`;
    }

    return { displayProjects };

})();