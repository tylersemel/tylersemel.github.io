import profileImage from "../images/Dana_Scully.jpg";

export const HomeView = (() => {
    function displayHome(contentDiv) {
        contentDiv.innerHTML =
        ` <section id="main-text">
            <div class="text">
                <h1 class="name">Hi! I'm Tyler</h1>
                <h2 class="role">Software Engineer in NC</h2>
            </div>
            <div class="image-wrapper"></div>
        </section>
        <section id="about">
            <h3>About</h3>
            <p>Hello! I am a new software engineer graduating with a Bachelors in Computer Science from NC State. 
                I am interested in full-stack development and have focused my time on experimenting to hone these skills. 
                I am available for work!
            </p>
        </section>
        <section id="skills">
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
