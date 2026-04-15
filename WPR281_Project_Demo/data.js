let people = [
  { id: 1, name: "Justin", surname: "Scheepers", email: "justin.s@college.edu", username: "admin_user" },
  { id: 2, name: "Dylan", surname: "Botes", email: "steve.l@college.edu", username: "dev_steve" },
  { id: 3, name: "Derek", surname: "Roux", email: "derek.r@college.edu", username: "qa_pro" },
  { id: 4, name: "Johan", surname: "Victor", email: "johan.v@college.edu", username: "dev_john" }
];

let projects = [
  { id: 101, name: "E-Commerce Website" },
  { id: 102, name: "Invenntory Mobile App" }
];
 
let issues = [
  { id: 1, summary : "Login button doesn't work on mobile", description: "When tapping 'Login' on a phone, nothing happens.", identifiedBy: 3, dateIdentified: "2026-04-10", projectId: 101, assignedTo: 2, status: "open", priority: "high", targetResolutionDate: "2026-04-20" },
  { id: 2, summary : "Typo on landing page", description: "The word 'Welcome' is spelled 'Welcom'.", identifiedBy: 1, dateIdentified: "2026-04-12", projectId: 101, assignedTo: 4, status: "resolved", priority: "low", targetResolutionDate: "2026-04-13", actualResolutionDate: "2026-04-12", resolutionSummary: "Fixed the spelling in index.html" },
  { id: 3, summary: "Checkout page infinite loader", description: "Clicking 'Pay' spins forever without processing the card.", identifiedBy: 2, dateIdentified: "2026-04-13", projectId: 101, assignedTo: 2, status: "overdue", priority: "high", targetResolutionDate: "2026-04-14" },
  { id: 4, summary: "Mobile App: Splash screen freeze", description: "App hangs on the logo screen during startup.", identifiedBy: 4, dateIdentified: "2026-04-14", projectId: 102, assignedTo: 4, status: "open", priority: "high", targetResolutionDate: "2026-04-25" },
  { id: 5, summary: "Search results count is wrong", description: "Shows 5 items but there are actually 10 in the list.", identifiedBy: 3, dateIdentified: "2026-04-11", projectId: 101, assignedTo: 1, status: "resolved", priority: "medium", targetResolutionDate: "2026-04-15", actualResolutionDate: "2026-04-14", resolutionSummary: "Adjusted the array length logic." },
  { id: 6, summary: "Password reset link is expired", description: "The link sent via email says it's expired immediately.", identifiedBy: 2, dateIdentified: "2026-04-14", projectId: 101, assignedTo: 2, status: "open", priority: "medium", targetResolutionDate: "2026-04-28" },
  { id: 7, summary: "Gallery images overlapping", description: "On tablets, the product images stack on top of each other.", identifiedBy: 3, dateIdentified: "2026-04-09", projectId: 102,assignedTo: 4, status: "resolved", priority: "low", targetResolutionDate: "2026-04-12", actualResolutionDate: "2026-04-11", resolutionSummary: "Updated CSS grid settings." },
  { id: 8, summary: "Session timeout too fast", description: "Users are logged out after only 2 minutes of inactivity.", identifiedBy: 1, dateIdentified: "2026-04-14", projectId: 101, assignedTo: 1, status: "open", priority: "medium", targetResolutionDate: "2026-05-01" },
  { id: 9, summary: "Export to PDF fails", description: "Clicking export results in a 404 error page.", identifiedBy: 4, dateIdentified: "2026-04-05", projectId: 101, assignedTo: 2, status: "overdue", priority: "medium", targetResolutionDate: "2026-04-10" },
  { id: 10, summary: "Dark mode color contrast", description: "Blue text on black background is hard to read.", identifiedBy: 3, dateIdentified: "2026-04-14", projectId: 102, assignedTo: 4, status: "open", priority: "low", targetResolutionDate: "2026-05-10" },
];

export { people, projects, issues };