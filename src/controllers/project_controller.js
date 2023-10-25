import ProjectModel from '../models/project_model.js';

class ProjectController{
    getProject(req,res,next){
     let projects = ProjectModel.getAll();
     res.render('index',{projects: projects});
    }
    
    getAddProject(req,res,next){
        return res.render('new-project',{
            errorMessage: null,
        });
    }
    postNewProject(req,res,next){
        ProjectModel.add(req.body);
        var projects = ProjectModel.getAll();
        return res.render('index',{projects});
    }
    getUpdateProjectView(req,res,next){
        //1. if product exist return view
        const id  = req.params.id;
        const projectFound = ProjectModel.getById(id);
        if (projectFound) {
            res.render('update-project',{
                project : projectFound,
                errorMessage : null,
            });
        }
       // 2. else return Errors
       else{
        res.status(401).send("Project Not Found")
       }
    }
}
export default ProjectController;