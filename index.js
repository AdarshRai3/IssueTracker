import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import ProjectController from "./src/controllers/project.controller.js";
import IssueController from "./src/controllers/issue.controller.js";
import path from "path";
import validationMiddleware from "./src/middleware/validation.middleware.js";

const app = express();

//this is static decleration which help us to use file in  public folder directly
app.use(express.static("public"));
// set up view engine settings this will help us to present data dynamically and render the pages
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(express.urlencoded({ extended: true }));

// Create instance of Project Controller
const projectController = new ProjectController();
const issueController = new IssueController();

//this is static decleration which help us to use file in  views folder directly
app.use(express.static("src/views"));
app.use(expressEjsLayouts);

// these are the functionalities of project.ejs page
// this will add the existing project in the list
app.get("/", projectController.getProjects);
// this will give you to the form to add project
app.get("/new", projectController.getAddForm);

// this will post the new project
app.post(
  "/",
  // adding validation middleware before the controller function
  validationMiddleware,
  projectController.addNewProject
);

//this will fetch the project submitted in that form
app.get("/update-project/:id", projectController.getUpdateProjectView);

//this will post the update project
app.post("/update-project/", projectController.postUpdateProject);

// this will delete the project
app.post("/delete-project/:id", projectController.deleteProject);

// these are functionalities of issue.ejs page
// this will post the issue for the project
app.get("/issue/:id", issueController.getProjectIssue);

// app.get('/issue/:id',
// issueController.getIssues,
// );
//

app.get("/add-issue/:id", issueController.getIssueForm);

app.post("/issue/:id", issueController.addNewIssue);

app.get("/update-issue/:issueid", issueController.getUpdateIssue)

app.post(
  "/update-issue/:issueid", 
  issueController.postUpdateIssue
);

app.get("/delete-issue/:issueid", 
issueController.deleteIssue
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
