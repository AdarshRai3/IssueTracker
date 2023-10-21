import path from 'path'
import ProjectModel from '../models/project_model.js';

export default class ProjectController{
    getProject(req,res){
     var projects = ProjectModel.get();
     return res.sendFile(
        path.join(path.resolve(),'src','views','project.ejs')
        );
    }
}