
// This function's purpose is to create a new person for the team.
function createPerson(name, surname, email, username) {

    // Automatically assign a new ID based off of how many ID's already exist
    let newId = people.length === 0 ? 1 : Math.max(...people.map(person => person.id)) + 1;

    let newPerson = {
        id: newId,
        name: name,
        surname: surname,
        email: email,
        username: username
    }

    // Push to the array of objects
    people.push(newPerson);

    // We call our save function here to store the values.
    savePeople();

    return newPerson;
}


// This function is to simply create a new project
function createProject(name) {
    
    // Same as before, automatically assign a new ID
    let newId = projects.length === 0 ? 1 : Math.max(...projects.map(project => project.id)) + 1;

    let newProject = {
        id: newId,
        name: name
    }

    // Push to the array of objects
    projects.push(newProject);

    // Again we call the respective save function
    saveProjects();

    return newProject;

}