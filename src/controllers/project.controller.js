import ProjectModel from "../models/project.model.js"
export default class ProjectController{

//to get project from the existing database
    getProjects(req,res) {
        let projects = ProjectModel.get()
        console.log(projects)
        // view engine will send us here and from here we control the specic page we want to render from views folder
        res.render("projects", {projects:projects})
    }
}