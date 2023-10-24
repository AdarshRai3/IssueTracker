import ProjectModel from '../models/project_model.js';

class ProjectController{
    getProject(req,res,next){
     let projects = ProjectModel.get();
     res.render('project',{projects: projects});
    }


    getAddProject(req,res,next){
        return res.render('newproject',{
            errorMessage: null,
        });
    }

    postNewProject(req,res,next){
        
        console.log(req.body);
        ProjectModel.add(req.body)
        let projects = ProjectModel.get();
        return res.render('project',{projects:projects})
    }
}
export default ProjectController;