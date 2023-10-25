import express from 'express';
import ProjectController from './src/controllers/project_controller.js';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import validationMiddleware from './src/middlewares/validation_middleware.js';

const server = express();
const projectController = new ProjectController;

server.use(expressLayouts);
server.use(express.json());
server.use(express.static('src/views'));
// parse form data
server.use(express.urlencoded({extended:true}));


// setup view engine settings
server.set("view engine", "ejs");
server.set("views",
path.join(path.resolve(),'src','views')
);


// Create instance of ProductController
server.get('/',projectController.getProject);
server.get(
    '/create-project',
    projectController.getAddProject
);
server.get(
    '/update-project/:id',
    projectController.getUpdateProjectView
);
server.post(
    '/',
    validationMiddleware,
    projectController.postNewProject
);

server.listen (3000, (req,res)=>{
    console.log('Express Server is Up and Running');
})