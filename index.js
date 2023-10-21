import express from "express";
import IssueController from "./src/controllers/issue_controller.js";
import ProjectController from "./src/controllers/project_controller.js";
import path from 'path'


const server = express();
const issueController= new IssueController;
const projectController=new ProjectController;

server.set("view engine", "ejs");
server.set("views",path.join(path.resolve(),'src','views'));

server.use(express.static('src/views'));

server.get('/',projectController.getProject);

server.get('/issues',issueController.getIssues);


server.get('/', (req,res)=>{
    return res.send('Server is up and running');
})

server.listen (3000, (req,res)=>{
    console.log('Express Server is Up and Running');
})