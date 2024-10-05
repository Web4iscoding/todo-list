import projectSvg from "./img/project.svg";
import deleteSvg from "./img/delete.svg";
import loadProjectBar from "./loadProjectBar.js";
import loadProjectContent from "./loadProjectContent.js";
import pageHandler from "./pageHandler.js";
import getActivePage from "./getActivePage.js";
import setEmptyState from "./setEmptyState.js";

export default function() {
    const container = document.createElement("div");
    const selectProjectButton = document.createElement("div");
    const img = document.createElement("img");
    img.src = projectSvg;
    const projectName = document.createElement("div");
    selectProjectButton.appendChild(img);
    selectProjectButton.appendChild(projectName);
    const deleteImg = document.createElement("img");
    deleteImg.src = deleteSvg;
    container.appendChild(selectProjectButton);
    container.appendChild(deleteImg);

    document.querySelector(".project-list").appendChild(container);

    deleteImg.addEventListener("click", (e) => {
        if (projectName.textContent === getActivePage())
            setEmptyState();
        localStorage.removeItem(projectName.textContent);
        loadProjectBar();
    });

    selectProjectButton.addEventListener("click", (e) => {
        pageHandler(projectName.textContent);
        loadProjectContent(getActivePage());
    })
};