import { format } from "date-fns";
import duplicateHandler from "./duplicateHandler.js";
import pageHandler from "./pageHandler.js";

export default function() {
    const addProject = document.createElement("div");
    addProject.className = "add-project";
    const addProjectForm = document.createElement("div");
    addProjectForm.className = "add-project-form";
    const crossSpan = document.createElement("span");
    const addProjectFormHeader = document.createElement("div");
    const addProjectFormHeaderLabel = document.createElement("label");
    addProjectFormHeaderLabel.textContent = "New Project";
    addProjectFormHeaderLabel.htmlFor = "project-name";
    addProjectFormHeader.appendChild(addProjectFormHeaderLabel);
    const formDiv = document.createElement("div");
    const form = document.createElement("form");
    const inputContainer = document.createElement("div");
    const projectNameInput = document.createElement("input");
    projectNameInput.required = true;
    projectNameInput.placeholder = "My Project";
    projectNameInput.id = "project-name";
    projectNameInput.maxLength = 15;
    const requiredTextSpan = document.createElement("span");
    inputContainer.appendChild(projectNameInput);
    inputContainer.appendChild(requiredTextSpan);
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add";
    form.appendChild(inputContainer);
    form.appendChild(submitButton);
    formDiv.appendChild(form);
    addProjectForm.appendChild(crossSpan);
    addProjectForm.appendChild(addProjectFormHeader);
    addProjectForm.appendChild(formDiv);
    addProject.appendChild(addProjectForm);

    document.querySelector("body > div:first-child").appendChild(addProject);

    projectNameInput.focus();

    addEventListener("keydown", e => {
        if (e.key == "Escape")
        document.querySelector("body > div:first-child").innerHTML = "";
    });

    crossSpan.addEventListener("click", () => {
        document.querySelector("body > div:first-child").innerHTML = "";
    });

    addProject.addEventListener("click", (e) => {
        if (e.target.className == "add-project")
            document.querySelector("body > div:first-child").innerHTML = "";
    });

    form.addEventListener("submit", (e) => {
        const checkedProjectName = duplicateHandler("newProject", projectNameInput.value);

        const project = {
            projectName: checkedProjectName,
            creationDate: format(new Date(), "dd/MM/yyyy"),
            toDo: [],
            current: false
        };

        localStorage.setItem(checkedProjectName, JSON.stringify(project));
        pageHandler(checkedProjectName);
    });
};