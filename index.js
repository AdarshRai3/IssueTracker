import express, { urlencoded } from "express";
import IssueController from "./src/controllers/issue_controller.js";
import ProjectController from "./src/controllers/project_controller.js";
import path from 'path'
import expressLayouts from "express-ejs-layouts";


const server = express();
const issueController= new IssueController;
const projectController=new ProjectController;

// parse form data
server.use(express.urlencoded({extended:true}));

// setup view engine settings
server.set("view engine", "ejs");
server.set("views",path.join(path.resolve(),'src','views'));


server.use(express.static('src/views'));
server.use(expressLayouts);

// Create an instance of ProductController
server.get('/',projectController.getProject);
server.get('/#project',projectController.getnewProject);
server.get('/issues',issueController.getIssues);
server.post('/',projectController.getnewProject);

server.get('/', (req,res)=>{
    return res.send('Server is up and running');
})

server.listen (3000, (req,res)=>{
    console.log('Express Server is Up and Running');
})