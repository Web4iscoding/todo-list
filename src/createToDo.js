import loadProjectContent from "./loadProjectContent.js";

export default function() {
    const toDo = document.createElement("div");
    toDo.className = "to-do";
    const toDoBar = document.createElement("div");
    toDoBar.className = "to-do-bar";
    const toDoTitle = document.createElement("div");
    toDoTitle.className = "to-do-title";
    const toDoDesc = document.createElement("div");
    toDoDesc.className = "to-do-desc";
    const toDoDue = document.createElement("div");
    toDoDue.className = "to-do-due";
    const toDoPriority = document.createElement("div");
    toDoPriority.className = "to-do-priority";
    const img = document.createElement("img");
    const priorityDiv = document.createElement("div");
    toDoPriority.appendChild(img);
    toDoPriority.appendChild(priorityDiv);
    const deleteDiv = document.createElement("div");
    deleteDiv.className = "delete";
    toDoBar.appendChild(toDoTitle);
    toDoBar.appendChild(toDoDesc);
    toDoBar.appendChild(toDoDue);
    toDoBar.appendChild(toDoPriority);
    toDoBar.appendChild(deleteDiv);
    const toDoCheck = document.createElement("div");
    toDoCheck.className = "to-do-check";
    const checkDiv = document.createElement("div");
    toDoCheck.appendChild(checkDiv);
    toDo.appendChild(toDoBar);
    toDo.appendChild(toDoCheck);

    document.querySelector(".main-content").appendChild(toDo);

    toDo.addEventListener("click", (e) => {
        if (e.target.className === "delete") 
            toDo.innerHTML = "";
    });

    toDoCheck.querySelector("div").addEventListener("click", (e) => {
        const projectName = document.querySelector(".project-name").textContent;
        const project = JSON.parse(localStorage.getItem(projectName));
        for(let i = 0; i < project.toDo.length; i++) {
            if(project.toDo[i].title === toDoTitle.textContent) {
                project.toDo[i].finished = project.toDo[i].finished ? false : true;
                break;
            }
        }
        localStorage.setItem(projectName, JSON.stringify(project));
        loadProjectContent(projectName);      
    });

    deleteDiv.addEventListener("click", (e) => {
        const projectName = document.querySelector(".project-name").textContent;
        const project = JSON.parse(localStorage.getItem(projectName));
        let indexToBeDeleted = 0;
        for(let i = 0; i < project.toDo.length; i++) {
            if(project.toDo[i].title === toDoTitle.textContent) {
                indexToBeDeleted = i;
                break;
            }
        }
        project.toDo.splice(indexToBeDeleted, 1);
        localStorage.setItem(projectName, JSON.stringify(project));
        loadProjectContent(projectName);
    });
};