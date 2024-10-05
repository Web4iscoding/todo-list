export default function(projectName) {
    const projects = localStorage;
    
    for (let project of Object.getOwnPropertyNames(projects)) {
        if(project === projectName) {
            const selectedProject = JSON.parse(localStorage.getItem(project));
            selectedProject.current = true;
            localStorage.setItem(project, JSON.stringify(selectedProject));
        }
        else {
            const notSelectedProject = JSON.parse(localStorage.getItem(project));
            notSelectedProject.current = false;
            localStorage.setItem(project, JSON.stringify(notSelectedProject));
        }
    }
};