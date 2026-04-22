initStorage();


    // Variables to remember which ticket's function was clicked
    let currentAssignId = null;
    let currentEditId = null;
    
    // These variables are used for the dropdown input features
    let assignSelect = document.getElementById("assignPersonSelect");
    let createProjectSelect = document.getElementById("createIssue_Project");
    let createIdentifiedBySelect = document.getElementById("createIssue_IdentifiedBy");
    let createAsssignedToSelect = document.getElementById("createIssue_AssignedTo");


    // These loops are to fill the different drop down boxes with our data from storage.js
    people.forEach(person => {
        let option = document.createElement("option");
          option.value = person.id;
          option.innerText = person.name + " " + person.surname;
          assignSelect.appendChild(option);
    });

    projects.forEach(project => {
      let option = document.createElement("option");
      option.value = project.id;
      option.innerText = project.name;
      createProjectSelect.appendChild(option);
    });

    people.forEach(person => {
      let option = document.createElement("option");
      option.value = person.id;
      option.innerText = person.name + " " + person.surname;
      createIdentifiedBySelect.appendChild(option);
    });

    people.forEach(person => {
      let option = document.createElement("option");
      option.value = person.id;
      option.innerText = person.name + " " + person.surname
      createAsssignedToSelect.appendChild(option);
    });

    // This functions purpose is to display all our data, also it's so that everytime we make a change
    // to tickets, we call this function again so that we instantly see the changed values instead of reloading the page.
    function renderTable() {
      let tableBody = document.getElementById('bugTableBody');
      tableBody.innerHTML = '';

      issues.forEach(issue => {
          let row = document.createElement('tr');

          // This is how we display the data, notice that for status and priority we use Bootstrap Badges to give them a background color based
          // on severity
          row.innerHTML = `
            <td>${issue.id}</td>
            <td>${issue.summary}</td>
            <td><span class="badge fs-6 ${issue.priority === 'high' ? 'bg-danger' : issue.priority === 'medium' ? 'bg-warning text-dark' : 'bg-success'}">${issue.priority}</span></td>
            <td><span class="badge fs-6 ${issue.status === 'overdue' ? 'bg-danger' : issue.status === 'resolved' ? 'bg-success' : 'bg-primary'}">${issue.status}</span></td>
            <td>
                <button class="btn btn-primary btn-sm" data-id="${issue.id}" data-bs-toggle="modal" data-bs-target="#modalViewIssue">View</button>
                <button class="btn btn-warning btn-sm" data-id="${issue.id}" data-bs-toggle="modal" data-bs-target="#modalEditIssue">Edit</button>
                <button class="btn btn-info btn-sm" data-id="${issue.id}" data-bs-toggle="modal" data-bs-target="#modalAssignIssue">Assign</button>
            </td>
          `;
        tableBody.appendChild(row);
    })};
    
    // Here we call it just so that we can see the initial tickets
    renderTable();


    // This block is to pre-fill the values of the selected ticket's View button
    document.getElementById("bugTableBody").addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-primary")) {
            let issueId = parseInt(event.target.getAttribute("data-id"));
            let issue = getIssueById(issueId);
            let project = projects.find(project => project.id === issue.projectId);
            let assignedPerson = people.find(people => people.id === issue.assignedTo);

            // Pre-fill with existing values
            document.getElementById("viewIssueSummary").innerText = issue.summary;
            document.getElementById("viewIssueDescription").innerText = issue.description;
            document.getElementById("viewIssueProject").innerText = project ? project.name : "Unknown";
            document.getElementById("viewIssueAssigned").innerText = assignedPerson ? assignedPerson.name + " " + assignedPerson.surname : "Unassigned";
            document.getElementById("viewIssuePriority").innerText = issue.priority;
            document.getElementById("viewIssueStatus").innerText = issue.status;
            document.getElementById("viewIssueDateIdentified").innerText = issue.dateIdentified;
            document.getElementById("viewIssueDateResolved").innerText = issue.targetResolutionDate;
        }
    });

   // This is for when the edit button is clicked, then the values are pre-filled with the current ticket's values.
    document.getElementById("bugTableBody").addEventListener("click", function(event) {
      if (event.target.classList.contains("btn-warning")) {
          currentEditId = parseInt(event.target.getAttribute("data-id"));
          let issue = getIssueById(currentEditId);

          // Pre-fill the form with current values
          document.getElementById("editSummary").value = issue.summary;
          document.getElementById("editDescription").value = issue.description;
          document.getElementById("editPriority").value = issue.priority;
          document.getElementById("editStatus").value = issue.status;
        }
    }); 

        // Same as above instead this is for the Assign button
    document.getElementById("bugTableBody").addEventListener("click", function(event) {
      if (event.target.classList.contains("btn-info")) {
          currentAssignId = parseInt(event.target.getAttribute("data-id"));
        }
    });


    // This is for when the Update Ticket button is clicked within the Edit Modal, we save the changes
    document.getElementById("confirmEditIssue").addEventListener("click", function() {
      editIssue(currentEditId, {
         summary: document.getElementById("editSummary").value,
         description: document.getElementById("editDescription").value,
         priority: document.getElementById("editPriority").value,
         status: document.getElementById("editStatus").value
      });

      // Call the render table function to reload the table and show the new values
      renderTable();

      // Close the modal
      bootstrap.Modal.getInstance(document.getElementById("modalEditIssue")).hide();
    });                                                                               

    

    // This is for when we click the Assign button within the Assign modal, it saves the values
    document.getElementById("confirmAssignIssue").addEventListener("click", function() {
        let selectedPersonId = parseInt(document.getElementById("assignPersonSelect").value);

        // simple check to ensure something is selected
        if (!selectedPersonId) {
            alert("Please select a person to assign this issue to.");
            return;
        }

        // Here we call the assignIssue function defined in issues.js
        assignIssue(currentAssignId, selectedPersonId);

        // Call the render table function to reload the table and show the new values
        renderTable();

        // Close the modal
        bootstrap.Modal.getInstance(document.getElementById("modalAssignIssue")).hide();
    });

    // This is to make the Create Issue button work, by linking it to the backend and saving the inputs into the createIssue function
    document.getElementById("createNewIssue").addEventListener("click", function() {
      let summary = document.getElementById("createIssue_Summary").value;
      let description = document.getElementById("createIssue_Description").value;
      let priority = document.getElementById("createIssue_Priority").value;
      let dateIdentified = document.getElementById("createIssue_DateIdentified").value;
      let targetResolutionDate = document.getElementById("createIssue_TargetResolutionDate").value;
      let projectId = parseInt(document.getElementById("createIssue_Project").value);
      let identifiedBy = parseInt(document.getElementById("createIssue_IdentifiedBy").value);
      let assignedTo = parseInt(document.getElementById("createIssue_AssignedTo").value);

      // simple check to see if every field is filled in
      if (!summary || !description || !priority || !dateIdentified || !projectId || !identifiedBy || !targetResolutionDate) {
        alert("Please fill in all required fields.");
        return;
      }
      // Call the function createIssue and insert the input values.
      createIssue(summary, description, identifiedBy, dateIdentified, projectId, assignedTo, priority, targetResolutionDate); 
      
      // Call the render table function to reload the table and show the new values
      renderTable();

      // close the modal
       bootstrap.Modal.getInstance(document.getElementById("modalCreateIssue")).hide();
    });

    

