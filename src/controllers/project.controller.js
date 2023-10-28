import path from 'path';
import ProjectModel from "../models/project.model.js"

export default class ProjectController{

//method to get project from the existing database
    getProjects(req,res) {
        let projects = ProjectModel.get()
        console.log(projects)
        // view engine will send us here and from here we control the specic page we want to render from views folder
        res.render("projects", {projects:projects})
    }
//method to add project in the form
    getAddForm(req,res) {
       return res.render('new-project',{
        errorMessage: null,
    })
    }
//method to add new project to the existing list
   addNewProject(req,res,next) {
    // validate the data 
    // this code works perfectly fine but we must use validation middleware since it violates single responsibility principle and if we put this code in some diffrent function and call this code from addNewProject function our code will get tightly coupled , we put the code from here to validation.middleware.js
    
  
    //    access data from form
       console.log(req.body)
       let projects = ProjectModel.get()
       ProjectModel.add(req.body)
       res.render("projects",{projects:projects})
   }
}