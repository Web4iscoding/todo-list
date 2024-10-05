export default function() {
    const projects = localStorage;
    
    for (let project of Object.getOwnPropertyNames(projects)) {
        if(JSON.parse(localStorage.getItem(project)).current === true)
            return project;
    }
}