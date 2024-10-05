export default function(mode, value) {
    if(mode === "newProject") {
        const projects = localStorage;
        let newValue = value;
        let i = 0;

        while(Object.getOwnPropertyNames(projects).includes(newValue)) {
            i++;
            newValue = `${value} (${i})`
        }

        return newValue;
    }
    else if(mode === "newToDo") {
        const projectName = document.querySelector(".project-name").textContent;
        const titles = JSON.parse(localStorage.getItem(projectName)).toDo.map((toDo) => {
            return toDo.title;
        });

        let newValue = value;
        let i = 0;

        while(titles.includes(newValue)) {
            i++;
            newValue = `${value} (${i})`
        }

        return newValue;
    }
};