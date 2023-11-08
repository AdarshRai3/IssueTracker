import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import ProjectController from "./src/controllers/project.controller.js";
import IssueController from "./src/controllers/issue.controller.js";
import UserController from "./src/controllers/user.controller.js";
import path from "path";
import session from "express-session";
import { auth } from "./src/middleware/auth.middleware.js";
import validationMiddleware from "./src/middleware/validation.middleware.js";

const app = express();
app.use(session({
  secret:'SecretKey',
  resave: false,
  saveUninitialized: true,
  cookie:{secure:false},
}));

//this is static decleration which help us to use file in  public folder directly
app.use(express.static("public"));
// set up view engine settings this will help us to present data dynamically and render the pages
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(express.urlencoded({ extended: true }));

// Create instance of Project Controller
const projectController = new ProjectController();
const issueController = new IssueController();
const usersController = new UserController();
//this is static decleration which help us to use file in  views folder directly
app.use(express.static("src/views"));
app.use(expressEjsLayouts);

// these are the functionalities of project.ejs page

// this will register the user on this app 
app.get('/register', usersController.getRegister);

app.get('/login', usersController.getLogin);
app.post('/login', usersController.postLogin);
app.get('/logout', usersController.logout);
app.post(
  '/register',
  usersController.postRegister
);

// this will add the existing project in the list
app.get("/", auth , projectController.getProjects);
// this will give you to the form to add project
app.get("/new", auth , projectController.getAddForm);

// this will post the new project
app.post(
  "/",
  // adding validation middleware before the controller function
  auth,
  validationMiddleware,
  projectController.addNewProject
);

//this will fetch the project submitted in that form
app.get("/update-project/:id", auth , projectController.getUpdateProjectView);

//this will post the update project
app.post("/update-project/", auth , projectController.postUpdateProject);

// this will delete the project
app.get("/delete-project/:id", auth , projectController.deleteProject);

// these are functionalities of issue.ejs page
// this will post the issue for the project
app.get("/issue/:id", auth ,issueController.getProjectIssue);

// app.get('/issue/:id',
// issueController.getIssues,
// );
//

// it will add issue form in the particular project using project id
app.get("/add-issue/:id", auth ,issueController.getIssueForm);

// it will add the issue for particular project on the project page
app.post("/issue/:id", auth ,issueController.addNewIssue);

// it will update form for the issue on the issue page
app.get("/update-issue/:issueid", auth ,issueController.getUpdateIssue)

// it will post the updated issue on the issue page
app.post(
  "/update-issue/:issueid", 
  auth ,
  issueController.postUpdateIssue
);

// it will delete the issue on the issue page using issue id 
app.get(
  "/delete-issue/:issueid", 
   auth ,
  issueController.deleteIssue
);

// it will used for the registration page 

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
