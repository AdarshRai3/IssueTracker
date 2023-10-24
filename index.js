import express, { urlencoded } from "express";
import ProjectController from "./src/controllers/project_controller.js";
import IssuesController from "./src/controllers/issues_controller.js";
import path from "path";
import expressLayouts from "express-ejs-layouts";


const server = express();
const projectController=new ProjectController;
const issuesController= new IssuesController;

// parse form data
server.use(express.urlencoded({extended:true}));

// setup view engine settings
server.set("view engine", "ejs");
server.set("views",path.join(path.resolve(),'src','views'));


server.use(express.static('src/views'));
server.use(expressLayouts);

// Create instance of ProductController
server.get('/',projectController.getProject);
server.get('/#project',projectController.getAddProject);
server.post('/',projectController.postNewProject);

server.get('/issues',issuesController.getIssues);
server.get('/issues/#issues',issuesController.getAddIssues);
server.post('/issues',issuesController.postNewIssue);

server.get('/', (req,res)=>{
    return res.send('Server is up and running');
})

server.listen (3000, (req,res)=>{
    console.log('Express Server is Up and Running');
})