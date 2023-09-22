const skills = document.querySelectorAll(".skill");

window.addEventListener("scroll", () => {
    skills.forEach((skill) => {
        const skillPosition = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillPosition < windowHeight) {
            const progressBar = skill.querySelector("progress");
            progressBar.style.width = progressBar.getAttribute("value") + "%";
        }
    });
});
