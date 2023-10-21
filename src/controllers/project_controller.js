import ProjectModel from '../models/project_model.js';

export default class ProjectController{
    getProject(req,res){
     let projects = ProjectModel.get();
     res.render("project",{projects: projects});
    }
}