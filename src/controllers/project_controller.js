import ProjectModel from '../models/project_model.js';

export default class ProjectController{
    getProject(req,res){
     let projects = ProjectModel.get();
     res.render('project',{projects: projects});
    }


    getnewProject(req,res){
        res.render('new_project');
    }

    postNewProject(req,res){
        
        ProjectModel.add(req.body)
        let projects = ProjectModel.get();
        return res.render('project',{projects:projects})
    }
}