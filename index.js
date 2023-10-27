import express from 'express';
import ProjectController from './src/controllers/project.controller.js';
import path from 'path'

const app = express();

// set up view engine settings this will help us to present data dynamically and render the pages
app.set("view engine", "ejs");
app.set("views",path.join(path.resolve(),'src','views'));

// Create instance of Project Controller
const projectController = new ProjectController();


app.use(express.static('src/views'));

app.get('/', projectController.getProjects);

app.listen(9000);
console.log("app is running on port 9000");