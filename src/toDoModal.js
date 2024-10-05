import { format } from "date-fns";
import duplicateHandler from "./duplicateHandler.js";

export default function() {
    const addToDo = document.createElement("div");
    addToDo.className = "add-to-do";
    const addToDoForm = document.createElement("div");
    addToDoForm.className = "add-to-do-form";
    const crossSpan = document.createElement("span");
    const messageDiv = document.createElement("div");
    const messageDivContainerDiv = document.createElement("div");
    const message1 = document.createElement("div");
    const message2 = document.createElement("div");
    message1.textContent = "Keep Building,";
    message2.textContent = "@Web4iscoding";
    messageDivContainerDiv.appendChild(message1);
    messageDivContainerDiv.appendChild(message2);
    messageDiv.appendChild(messageDivContainerDiv);

    const formDiv = document.createElement("div");
    const form = document.createElement("form");

    const titleInputDiv = document.createElement("div");

    const titleInputLabel = document.createElement("label");
    titleInputLabel.textContent = "Title";
    titleInputLabel.htmlFor = "title";

    const titleInput = document.createElement("input");
    titleInput.className = "title"; 
    titleInput.required = true;
    titleInput.maxLength = 15;
    titleInput.placeholder = "My Title";
    titleInput.id = "title";
    const titleInputRequiredSpan = document.createElement("span");

    titleInputDiv.appendChild(titleInputLabel);
    titleInputDiv.appendChild(titleInput);
    titleInputDiv.appendChild(titleInputRequiredSpan);

    const descInputDiv = document.createElement("div");

    const descInputLabel = document.createElement("label");
    descInputLabel.textContent = "Description";
    descInputLabel.htmlFor = "desc";

    const descInput = document.createElement("input");
    descInput.className = "desc";
    descInput.required = true;
    descInput.maxLength = 30;
    descInput.placeholder = "My Description";
    descInput.id = "desc";
    const descInputRequiredSpan = document.createElement("span");

    descInputDiv.appendChild(descInputLabel);
    descInputDiv.appendChild(descInput);
    descInputDiv.appendChild(descInputRequiredSpan);

    const dueInputDiv = document.createElement("div");

    const dueInputLabel = document.createElement("label");
    dueInputLabel.textContent = "Due";
    dueInputLabel.htmlFor = "due";

    const dueInput = document.createElement("input");
    dueInput.className = "due";
    dueInput.required = true;
    dueInput.type = "date";
    const dueInputRequiredSpan = document.createElement("span");

    dueInputDiv.appendChild(dueInputLabel);
    dueInputDiv.appendChild(dueInput);
    dueInputDiv.appendChild(dueInputRequiredSpan);

    const selectDiv = document.createElement("div");

    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Priority";
    selectLabel.htmlFor = "priority";

    const select = document.createElement("select");
    select.required = true;
    select.id = "priority";

    const lowOption = document.createElement("option");
    lowOption.textContent = "Low";
    lowOption.value = "Low";
    const highOption = document.createElement("option");
    highOption.textContent = "High";
    highOption.value = "High";
    const mediumOption = document.createElement("option");
    mediumOption.textContent = "Medium";
    mediumOption.value = "Medium";
    select.appendChild(lowOption);
    select.appendChild(mediumOption);
    select.appendChild(highOption);

    selectDiv.appendChild(selectLabel);
    selectDiv.appendChild(select);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add";

    form.appendChild(titleInputDiv);
    form.appendChild(descInputDiv);
    form.appendChild(dueInputDiv);
    form.appendChild(selectDiv);
    form.appendChild(submitButton);
    formDiv.appendChild(form);


    addToDoForm.appendChild(crossSpan);
    addToDoForm.appendChild(messageDiv);
    addToDoForm.appendChild(formDiv);

    addToDo.appendChild(addToDoForm);

    document.querySelector("body > div:first-child").appendChild(addToDo);

    titleInput.focus();

    addEventListener("keydown", e => {
        if (e.key == "Escape")
        document.querySelector("body > div:first-child").innerHTML = "";
    });

    crossSpan.addEventListener("click", () => {
        document.querySelector("body > div:first-child").innerHTML = "";
    });

    addToDo.addEventListener("click", (e) => {
        if (e.target.className == "add-to-do")
            document.querySelector("body > div:first-child").innerHTML = "";
    });

    form.addEventListener("submit", (e) => {
        const projectName = document.querySelector(".project-name").textContent;
        const checkedTitleName = duplicateHandler("newToDo", titleInput.value);
        const project = JSON.parse(localStorage.getItem(projectName));
        const toDo = {
            title: checkedTitleName,
            description: descInput.value,
            due: format(dueInput.value, "dd/MM/yyyy"),
            priority: select.value,
            finished: false
        };
        project.toDo.push(toDo);
        localStorage.setItem(projectName, JSON.stringify(project));
    });
}