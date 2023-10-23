import ProjectModel from '../models/project_model.js';

class ProjectController{
    getProject(req,res,next){
     let projects = ProjectModel.get();
     res.render('project',{projects: projects});
    }


    getAddProject(req,res,next){
        res.render('new_project',{
            errorMessage: null,
        });
    }

    postNewProject(req,res,next){
        
        const { name,desc,author,date} = req.body;
        let errors = [];
        if (!name || name.trim() == '') {
            errors.push('Name is required');
        }
        if (!desc || desc.trim() == '') {
            errors.push('Description is required');
        }
        if (!author || author.trim() == '') {
            errors.push('Author is required');
        }
        if (errors.length > 0) {
            return res.render('new_project', {
              errorMessage: errors[0],
            });
        }
       

        ProjectModel.add(req.body)
        let projects = ProjectModel.get();
        return res.render('project',{projects})
    }
}
export default ProjectController;