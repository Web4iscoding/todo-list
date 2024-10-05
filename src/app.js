import showToDoModal from "./toDoModal.js";
import loadProjectContent from "./loadProjectContent.js";
import showProjectModal from "./projectModal.js";
import loadProjectBar from "./loadProjectBar.js";
import getActivePage from "./getActivePage.js";
import { format } from "date-fns";
import style from "./style.css";
import setEmptyState from "./setEmptyState.js";

const addToDoButton = document.querySelector(".add > img");
const newProjectButton = document.querySelector(".project-header img");

addToDoButton.addEventListener("click", () => {
    const pageIsEmpty = document.querySelector(".creation-date").textContent === "";
    if(!pageIsEmpty)
        showToDoModal();
});

addToDoButton.addEventListener("mouseenter", (e) => {
    const pageIsEmpty = document.querySelector(".creation-date").textContent === "";
    if(pageIsEmpty) {
        e.target.style.opacity = 0.5;
        document.querySelector(".add > img").style.cursor = "not-allowed";
    }
    else
        document.querySelector(".add > img").style.cursor = "pointer";
});

addToDoButton.addEventListener("mouseleave", (e) => {
    const pageIsEmpty = document.querySelector(".creation-date").textContent === "";
    if(pageIsEmpty)
        e.target.style.opacity = 1.0;
});

newProjectButton.addEventListener("click", () => {
    showProjectModal();
});

addEventListener("DOMContentLoaded", () => {
    setEmptyState();
    loadProjectBar();
    loadProjectContent(getActivePage());
});