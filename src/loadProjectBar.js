import createProjectBar from "./createProjectBar.js";

export default function() {
    const projects = localStorage;
    document.querySelector(".project-list").innerHTML = "";
    
    for (let project of Object.getOwnPropertyNames(projects)) {
        createProjectBar();
        document.querySelector(".project-list > div:last-child > div > div").textContent = project;
    }
};