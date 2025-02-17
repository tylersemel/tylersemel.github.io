import profileImage from "../images/Dana_Scully.jpg";

export const HomeView = (() => {
    function displayHome(contentDiv) {
        const body = document.querySelector('body');
        body.style.backgroundColor = "white";
        contentDiv.innerHTML =
        ` <section id="main-text" class="home-section">
                <div class="text">
                    <h1 class="name">Hi! I'm Tyler</h1>
                    <h2 class="role">Software Engineer</h2>
                </div>
                <div class="image-wrapper"></div>
            </section>
            <section id="about" class="home-section">
                <h3>About</h3>
                <p>I am a new software engineer graduating with a Bachelors in Computer Science from NC State. 
                    I am interested in full-stack development and have focused my time on experimenting to hone these skills. 
                    I am available for work!
                </p>
            </section>
            <section id="projects" class="home-section">
                <button class="projects-btn">
                    Projects 🔗
                </button>
                <ul class="projects-list">
                    <li class="project-item"><button class="project-btn" data-project="random-forests">Random Forests</button></li>
                    <li class="project-item"><button class="project-btn" data-project="coffeemaker">CoffeeMaker</button></li>
                    <li class="project-item"><button class="project-btn" data-project="todo-list">To Do List</button></li>
                    <li class="project-item"><button class="project-btn" data-project="recipe-social">Recipe Social</button></li>
                    <li class="project-item"><button class="project-btn" data-project="dream-files">Dream Files</button></li>
                </ul>
            </section>
            <section id="skills" class="home-section">
                <h3>Skills</h3>
                <ul class="skills-container">
                    <li class="skill-wrapper">
                        <div class="skill">HTML</div>
                    </li>
                    <li class="skill-wrapper">
                        <div class="skill">CSS</div>
                    </li>
                    <li class="skill-wrapper">
                        <div class="skill">JavaScript</div>
                    </li>
                    <li class="skill-wrapper">
                        <div class="skill">Java</div>
                    </li>
                    <li class="skill-wrapper">
                        <div class="skill">C/C++</div>
                    </li>
                    <li class="skill-wrapper">
                        <div class="skill">Databases</div>
                    </li>
                </ul>
            </section>`;

        const imageWrapper = document.querySelector(".image-wrapper");
        const img = document.createElement("img");
        img.src = profileImage;
        img.alt = "My profile picture";
        imageWrapper.appendChild(img);
    }

    return { displayHome };
})();
