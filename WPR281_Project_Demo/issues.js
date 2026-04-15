// Functions for the Issue system
function createIssue(summary, description, identifiedBy, dateIdentified, projectId, assignedTo, priority, targetResolutionDate) {

    // This is to create a new sequentially issue ID, firstly it checks if the array is empty and if so then start at 1
    // otherwise if not empty then find the highest ID and add 1.
    let newId = issues.length === 0 ? 1 : Math.max(...issues.map(issue => issue.id)) + 1;

    let newIssue = {
        id: newId,
        projectId: projectId,
        identifiedBy: identifiedBy,
        summary: summary,
        description: description,
        dateIdentified: dateIdentified,
        assignedTo: assignedTo,
        status: "open",
        priority: priority,
        targetResolutionDate: targetResolutionDate,
        resolutionDate: null,
        resolutionSummary: null

    }

    issues.push(newIssue);

    saveIssues();

    // I use return here so that the frontend can easily get the newly created issue
    return newIssue;
}

// This function does what it sounds like it does, you enter an issuesID as a param and it searches for a match and returns the match
function getIssueById(issueId) {
   let findIssue = issues.find(issue => issue.id === issueId);

   if (!findIssue) {
    console.log("Issue not found");
    return null;
   }

   return findIssue;
}

// Also does what it seems like it does
function getAllIssues() {
    return issues;
}

// This function is to assign a person to a Issue.
function assignIssue(issueId, personId) {
    let issue = getIssueById(issueId);

    if (!issue) { 
        return null;
    }

    issue.assignedTo = personId;

    saveIssues();

    return issue;
}

// This function is the most complex, the way you call it varies.
// Its set up in a way where the second paramater should be an object for example this is how you would call it
// editIssue(1, { status: "resolved", resolutionSummary: "Fixed the bug" });
// the second param can also be different like lets say you want to change the status, priority and targetResolutionDate then you would call it like this
// editIssue(1, {status: "Open", priority: "High", targetResolutiondate: "2026/6/6")
function editIssue(issueId, updatedData) {
    let issue = getIssueById(issueId);

    if (!issue) {
        return null
    };

    if (updatedData.status === "resolved" && !updatedData.resolutionDate) {
        updatedData.resolutionDate = new Date().toISOString().split('T')[0];
    }

    Object.assign(issue, updatedData);

    saveIssues();

   return issue; 
}

window.createIssue = createIssue;
window.getIssueById = getIssueById;
window.getAllIssues = getAllIssues;
window.assignIssue = assignIssue;
window.editIssue = editIssue;