import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import ProjectController from './src/controllers/project.controller.js';
import path from 'path'
import validationMiddleware from './src/middleware/validation.middleware.js';

const app = express();

// set up view engine settings this will help us to present data dynamically and render the pages
app.set("view engine", "ejs");
app.set("views",path.join(path.resolve(),'src','views'));
app.use(express.urlencoded({extended:true}))

// Create instance of Project Controller
const projectController = new ProjectController();

app.use(express.static('src/views'));
app.use(expressEjsLayouts);

// this will add the existing project in the list
app.get('/', 
projectController.getProjects
);
// this will give you to the form to add project

app.get('/new',
projectController.getAddForm
);

// this will post the new project
app.post('/',
// adding validation middleware before the controller function
validationMiddleware, 
projectController.addNewProject
);


//this will fetch the project submitted in that form
app.get('/update-project/:id',
projectController.getUpdateProjectView
);



//this will post the project
app.post(
    '/update-project/',
    projectController.postUpdateProject
);

app.get('/delete-project/:id', projectController.deleteProject);
app.listen(9000, () => {
    console.log('Server is running on port 9000');
});