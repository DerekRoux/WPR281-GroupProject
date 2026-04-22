initStorage();

// This is the render function for the People table, we call this function after the confirm update button inside the Modals
// to re-render the table every time a new person is added
function renderPeopleTable () {
    let tableBody = document.getElementById('peopleTableBody');
      tableBody.innerHTML = '';

    people.forEach(person => {
          let row = document.createElement('tr');

          row.innerHTML = `
          <td>${person.id}</td>
          <td>${person.name}</td>
          <td>${person.surname}</td>
          <td>${person.email}</td>
          <td>${person.username}</td>
          
          `;
          tableBody.appendChild(row);
        
    });
}
    // We call it here once just for the initial data to show first.
    renderPeopleTable();

    // This is the functionality for the confirmCreatePerson button found inside the create person Modal
    document.getElementById("confirmCreatePerson").addEventListener("click", function() {
        // Take in the inputs
        let name = document.getElementById("createPerson_Name").value;
        let surname = document.getElementById("createPerson_Surname").value;
        let email = document.getElementById("createPerson_Email").value;
        let username = document.getElementById("createPerson_Username").value;

        // Simple check to ensure all fields are filled in
        if (!name || !surname || !email || !username) {
            alert("Please fill in all the required fields.")
            return;
        }

        // Call create function and insert our inputs we grabbed above
        createPerson(name, surname, email, username);

        // Render function
        renderPeopleTable();

        // CLose modal
        bootstrap.Modal.getInstance(document.getElementById("modalCreatePerson")).hide();

    });

    // Render function for project, works the same as the other 2 render functions
    function renderProjectsTable () {
        
        let tableBody = document.getElementById('projectsTableBody');
        tableBody.innerHTML = '';

        // Loop for each project
        projects.forEach(project => {
            let row = document.createElement('tr');

            row.innerHTML = `
            <td>${project.id}</td>
            <td>${project.name}</td>
            
            `;
            tableBody.appendChild(row);
        });

};

    // Again we call the render function once just to display the initial values
    renderProjectsTable();

    // This is for the confirm button found inside the create project modal
    document.getElementById("confirmCreateProject").addEventListener("click", function() {
        let name = document.getElementById("createProject_Name").value;

        // SImple check for empty fields
        if (!name) {
            alert("Please enter the project name.")
        };

        // Call create function
        createProject(name);

        // Call render function
        renderProjectsTable();

        // Close modal
        bootstrap.Modal.getInstance(document.getElementById("modalCreateProject")).hide();

    });

    
