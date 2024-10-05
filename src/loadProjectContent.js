import createToDo from "./createToDo.js";
import low from "./img/low-priority.svg";
import medium from "./img/mid-priority.svg";
import high from "./img/high-priority.svg";
import none from "./img/none-priority.svg";
import checked from "./img/checked.svg";

export default function(projectName) {
    if (projectName === undefined)
        return;
    const project = JSON.parse(localStorage.getItem(projectName));
    document.querySelector(".main-content").innerHTML = "";
    document.querySelector(".project-name").textContent = project.projectName;
    document.querySelector(".creation-date").textContent = "(" + "created " + project.creationDate + ")";

    for(let toDo of project.toDo) {
        createToDo();
        const currentToDo = document.querySelector(".main-content > div:last-child");
        currentToDo.querySelector(".to-do-title").textContent = toDo.title;
        currentToDo.querySelector(".to-do-desc").textContent = toDo.description;
        currentToDo.querySelector(".to-do-due").textContent = toDo.due;
        currentToDo.querySelector("img").src = toDo.finished ? none : toDo.priority === "Low" ? low : toDo.priority === "Medium" ? medium : high;
        currentToDo.querySelector(".to-do-priority > div").textContent = toDo.priority;
        currentToDo.querySelector(".to-do-check > div").style.backgroundImage = toDo.finished ? `url(${checked})` : undefined;
        currentToDo.querySelector(".to-do-title").style.textDecoration = toDo.finished ? "line-through" : undefined;
        currentToDo.querySelector(".to-do-desc").style.textDecoration = toDo.finished ? "line-through" : undefined;
        currentToDo.querySelector(".to-do-due").style.textDecoration = toDo.finished ? "line-through" : undefined;
        currentToDo.querySelector(".to-do-priority > div").style.textDecoration = toDo.finished ? "line-through" : undefined;
        currentToDo.querySelector(".to-do-bar").style.opacity = toDo.finished ? 0.3 : 1.0;
    }
};