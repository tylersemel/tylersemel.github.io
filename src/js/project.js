import coffeeMakerHome from "../images/coffeemaker/coffeemaker2.png";
import coffeeMakerUML from "../images/coffeemaker/UML.png";
import todoListImg from "../images/todolist.png";
import recipeSocialImg from "../images/recipesocial.png";

export const ProjectView = (() => {
    const randomForests = 
        `<div class="project-container">
                <h1 class="project-title">Random Forests</h1>
                <ul class="tags-container">
                    <li>Unity</li>
                    <li>Unit Tests</li>
                </ul>
                <p class="short-desc">A video game introducing kids to machine learning concepts.</p>
                
                <div class="project-iframe-container">
                    <iframe src="https://drive.google.com/file/d/1F69dzjAvmVRuN1sE2Ln3I19f8OXanx8Y/preview" width="640" height="360" allow="autoplay"></iframe>
                </div>
                <div class="project-links-container">
                    <span>Links:</span>
                    <ul class="project-links">
                        <li class="project-link"><a href="https://www.katabasis.org/" target="_blank" rel="noopener noreferrer">Katabasis</a></li>
                    </ul>
                </div>
                <div class="project-info-container">
                    <p>
                        Random Forests was a senior design project that was sponsored by Katabasis, a non-profit organization that specializes in developing educational software for children ages 8-15.
                    </p>
                    <p>
                        I worked on this Unity project with four other software developers over the course of four months. We were tasked with the implementation of the "board" portion of the game along with integrating it with a sample selection of minigames. 
                        Katabasis provided us with the minigames to integrate into the landing spaces of the board.
                        
                        We proposed and implemented a web-style board game that utilizes a card-based movement system. These cards allow students to strategize while learning more about animals and their biomes, driving engagement and educational value.
                        I signed a participation agreement with Katabasis, so I cannot show any source code for this project, but I can show gameplay as displayed in the video above.
                    </p>
                </div>
            </div>`;
    const coffeeMaker = 
    `<div class="project-container">
                <h1 class="project-title">CoffeeMaker</h1>
                <ul class="tags-container">
                    <li>Java</li>
                    <li>REST API</li>
                    <li>MySQL</li>
                    <li>Spring Boot</li>
                    <li>Hibernate</li>
                </ul>
                <p class="short-desc">A drink ordering system.</p>
                
                <div class="project-img-container">
                    <div class="img-wrapper">
                        
                        <span><i>The home page of CoffeeMaker.</i></span>
                    </div>
                    <div class="img-wrapper two">
                        
                        <span><i>The system's structure as a UML diagram.</i></span>
                    </div>
                </div>
                <div class="project-links-container">
                    <span>Links:</span>
                    <ul class="project-links">
                        <li class="project-link"><a href="https://drive.google.com/file/d/1321EU_QP1k8-IRQ2kI4REi2oi5zqmDO3/view?usp=sharing" target="_blank" rel="noopener noreferrer">CoffeeMaker User Guide</a></li>
                    </ul>
                </div>
                <div class="project-info-container">
                    <p>
                        CoffeeMaker is a system for customers to order and pick up drinks from the staff that create and make them. 
                        The system has functionality for creating a customer account, logging in, staff management, placing a drink order for a customer, seeing a customer's drink history, and updating inventory.
                        This system was pre-established and my team and I were tasked with adding all of the functionality listed above. 
                        Myself and four other software engineers developed this project over the course of three months. 
                        We used Java, HTML, CSS, AngularJS, Hibernate, Spring Boot, MySQL, and RESTful API to deliver the final product.
                        This project contains pre-existing code from NC State's CSC 326 Software Engineering course, so I am unable to share the source code.
                    </p>
                </div>
            </div>`;
    const todoList = 
    `<div class="project-container">
                <h1 class="project-title">To Do List</h1>
                <ul class="tags-container">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <p class="short-desc">A system to create and manage to do lists in the kanban style.</p>
                
                <div class="project-img-container">
                    <div class="img-wrapper">
                        <span><i>A screenshot of all tasks in the unsorted list.</i></span>
                    </div>
                </div>
                <div class="project-links-container">
                    <span>Links:</span>
                    <ul class="project-links">
                        <li class="project-link"><a href="https://tylersemel.github.io/todo-list/" target="_blank" rel="noopener noreferrer">Live Preview</a></li>
                        <li class="project-link"><a href="https://github.com/tylersemel/todo-list" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <div class="project-info-container">
                    <p>
                        A todo list application that lets you add, edit, and delete projects and tasks.
                    </p>
                </div>
            </div>`;
    const recipeSocial = 
    `<div class="project-container">
                <h1 class="project-title">Recipe Social</h1>
                <ul class="tags-container">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MySQL</li>
                </ul>
                <p class="short-desc">A Progressive Web App for posting recipes and sharing them with friends.</p>
                
                <div class="project-img-container">
                    <div class="img-wrapper">
                        <span><i>A screenshot of a user's profile page on recipe social.</i></span>
                    </div>
                </div>
                <div class="project-links-container">
                    <span>Links:</span>
                    <ul class="project-links">
                        <li class="project-link"><a href="https://github.com/tylersemel/Recipe_Social" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <div class="project-info-container">
                    <p>
                        This was a group project for a web development class in which my team and I had to create a PWA (Progressive Web App) for any topic we chose. We decided to make a PWA that would allow users to create, store, and share recipes with friends.
                        We accessed and hosted images of this PWA through Docker. We also made use of JWT generation for user authentication, MariaDB for holding recipe and user information on the backend, and express for the API routes.

                        If I were to redo this project, I would overhaul the CSS and HTML layout to make it a cleaner and sleeker design.
                    </p>
                </div>
            </div>`;
    const dreamFiles = 
    `<div class="project-container">
                <h1 class="project-title">Dream Files</h1>
                <ul class="tags-container">
                    <li>Unreal Engine 5</li>
                    <li>C++</li>
                </ul>
                <p class="short-desc">A puzzle-platformer video game navigating through a dream-scape. Made with Unreal Engine 5.</p>
                
                <div class="project-iframe-container">
                    <iframe src="https://drive.google.com/file/d/1cfifUUYyLhNqDkU4NYrP5WgkH_vPuL5B/preview" width="640" height="360" allow="autoplay"></iframe>
                    <span><em>Walkthrough of the Dream Files game.</em></span>
                </div>
                <div class="project-links-container">
                    <span>Links:</span>
                    <ul class="project-links">
                        <li class="project-link"><a href="https://github.com/tylersemel/Dream_Files" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <div class="project-info-container">
                    <p>
                        Dream Files is a 3D, first-person, puzzle-platformer game where you play as secret agent Magnus Mutus, a man sent on a mission inside of a criminal's dreams.
                        I collaborated with two other software engineers over the course of four months, developing in Unreal Engine 5 to create a cohesive experience with a strong narrative. 
                        We made use of UE5's built in features for a first person character and expanded upon this with our own mechanics. 
                    </p>
                    <p>
                        This game features pickup mechanics for item interaction in puzzles, dialogue to introduce the player to the character's motivations, three distinct levels, a fog clearing mechanic, and Quixel Bridge assets for a semi-realistic aesthetic. 
                    </p>
                </div>
            </div>`;
        const jumpGame = 
        `<div class="project-container">
                    <h1 class="project-title">Jump!</h1>
                    <ul class="tags-container">
                        <li>Unreal Engine 5</li>
                        <li>C++</li>
                    </ul>
                    <p class="short-desc">A simple game to jump on platforms. Made with Unreal Engine 5.</p>
                    
                    <div class="project-iframe-container">
                        <iframe src="https://drive.google.com/file/d/1Hkh2RO9kiyThV4BwoJdXbHOv24phh8K6/preview" width="640" height="360" allow="autoplay"></iframe>
                        <span><em>Gameplay of Jump!</em></span>
                    </div>
                    <div class="project-links-container">
                        <span>Links:</span>
                        <ul class="project-links">
                            <li class="project-link"><a href="https://pseudocryptid.itch.io/jump" target="_blank" rel="noopener noreferrer">Jump! itch.io</a></li>
                        </ul>
                    </div>
                    <div class="project-info-container">
                        <p>
                            This is a short game where the player can jump indefinitely to earn the highest score!
                            I used this project as an exercise to better understand UE5 fundamentals.
                            My sister created the player model and the cloud VFX.
                        </p>
                    </div>
                </div>`;

    const htmlString = 
    `<div class="project-container">
                <h1 class="project-title">Random Forests</h1>
                <ul class="tags-container">
                    <li>Unity</li>
                    <li>Unit Tests</li>
                </ul>
                <p class="short-desc">A video game introducing kids to machine learning concepts.</p>
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

    function displayProject(project, contentDiv) {
        const body = document.querySelector('body');
        body.style.backgroundColor = "white";
        
        switch(project) {
            case 'random-forests':
                contentDiv.innerHTML = randomForests;
                break;
            case 'coffeemaker':
                contentDiv.innerHTML = coffeeMaker;
                const imageWrapper1 = document.querySelector(".img-wrapper");
                const img1 = document.createElement("img");
                img1.src = coffeeMakerHome;
                img1.alt = "The home page of CoffeeMaker.";
                imageWrapper1.insertBefore(img1, imageWrapper1.querySelector("span"));

                const imageWrapper2 = document.querySelector(".img-wrapper.two");
                const img2 = document.createElement("img");
                img2.src = coffeeMakerUML;
                img2.alt = "The UML diagram for CoffeeMaker.";
                imageWrapper2.insertBefore(img2, imageWrapper2.querySelector("span"));
                break;
            case 'todo-list':
                contentDiv.innerHTML = todoList;
                const imageWrapper3 = document.querySelector(".img-wrapper");
                const img3 = document.createElement("img");
                img3.src = todoListImg;
                img3.alt = "A screenshot of a todo list.";
                imageWrapper3.insertBefore(img3, imageWrapper3.querySelector("span"));
                break;
            case 'recipe-social':
                contentDiv.innerHTML = recipeSocial;
                const imageWrapper4 = document.querySelector(".img-wrapper");
                const img4 = document.createElement("img");
                img4.src = recipeSocialImg;
                img4.alt = "A screenshot of a todo list.";
                imageWrapper4.insertBefore(img4, imageWrapper4.querySelector("span"));
                break;
            case 'dream-files':
                contentDiv.innerHTML = dreamFiles;
                break;
            case 'jump-game':
                contentDiv.innerHTML = jumpGame;
                break;
            default: 
                contentDiv.textContent = "Nothing to see here";
        }
    }

    return { displayProject };
})();