

// These values are just placeholders
let people = [
    {
       id: 1,
       name: "John",
       surname: "Doe",
       email: "john.doe@email.com", 
       username: "johndoe"
    }
];

let projects = [
    {
        id: 1,
        name: "project1"
    }
];

let issues = [
    {
        id: 1,
        projectId: 1,
        identifiedBy: 1, // Use person ID 
        summary: "button no work",
        description: "Submit button no work",
        dateIdentified: "2026/04/14",
        assignedTo: 2, // Use person ID
        status: "open",
        priority: "low",
        targetResolutionDate: "2026/04/20",
        resolutionDate: null,
        resolutionSummary: null

    }
];

// Functions for saving and loading 
function savePeople() {
    // localStorage takes 2 arguments, a key or name we save it under which in this case is "people",
    // and a value. The value uses JSON.stringify so that we can convert the people array into a string because
    // localStorage can only store string values
    localStorage.setItem("people", JSON.stringify(people));
}

function loadPeople() {
    // Fetch whatever is saved under the key "people"
    let stored = localStorage.getItem("people");

    // Check that something exists 
    if (stored) {

        // JSON.parse converts the string back into a JS array
        people = JSON.parse(stored);
    }
}


function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjects() {
    let stored = localStorage.getItem("projects");

    if (stored) {
        projects = JSON.parse(stored);
    }
}

function saveIssues() {
    localStorage.setItem("issues", JSON.stringify(issues));
}

function loadIssues() {
    let stored = localStorage.getItem("issues");

    if (stored) {
        issues = JSON.parse(stored);
    }
}

// This is a initialisation function that checks if localStorage is empty, and if it is empty it will save the sample data 
// at the top as a starting point

function initStorage(initialPeople, initialProjects, initialIssues) {
    if (!localStorage.getItem("people")) {
        people = initialPeople;
        savePeople();
    } else {
        loadPeople();
    }

    if (!localStorage.getItem("projects")) {
        projects = initialProjects;
        saveProjects();
    } else {
        loadProjects();
    }
    
    if (!localStorage.getItem("issues")) {
        issues = initialIssues;
        saveIssues();
    } else {
        loadIssues();
    }
}

window.savePeople = savePeople;
window.loadPeople = loadPeople;
window.saveProjects = saveProjects;
window.loadProjects = loadProjects;
window.saveIssues = saveIssues;
window.loadIssues = loadIssues;
window.initStorage = initStorage;