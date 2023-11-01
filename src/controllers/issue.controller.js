import { name } from "ejs";
import IssueModel from "../models/issue.model.js"
import ProjectModel from "../models/project.model.js";
export default class IssueController{
  
  // cant use two same type of request with the same path
  // getIssues(req,res) {
  //   let issues = IssueModel.get()
  //   console.log(issues)
  //   // view engine will send us here and from here we control the specic page we want to render from views folder
  //   res.render('issue', {issues:issues})
  // }
  
  // function will show the issues related to particular project
  getProjectIssue(req, res) {
        // 1. if product exists then return view
        const id = req.params.id;
        let issues = IssueModel.get()
        const projectFound = ProjectModel.getById(id);
        // filter by projectid
        issues = issues.filter((issue)=>issue.projectid == id)


      if (projectFound) {
        res.render('issue', {
        project: projectFound,
        errorMessage: null,
        issues:issues
      });
    }
        // 2. else return errors.
    else {
          res.status(401).send('Project not found');
    }
  } 

  //function will get us the issue form to add the new issues to the particular Issue page
  getIssueForm(req, res) {
        // 1. if product exists then return view
        const id = req.params.id;
        let issues = IssueModel.get()
        const projectFound = ProjectModel.getById(id);
        if (projectFound) {
          res.render('add-issue', {
            // project: projectFound,
            errorMessage: null,
            issues:issues,
            id:id
          });
        }
        // 2. else return errors.
        else {
          res.status(401).send('Project not found');
        }
  }  

  // function will add new Issues to the partiular issue page 
  addNewIssue(req,res){
  
    
    let issues = IssueModel.get()
    const newIssue={
        issueid:issues.length+1,
        name:req.body.name,
        severity: req.body.severity,
        reporter: req.body.reporter,
        assignee:req.body.assignee,
        date:req.body.date,
        status:req.body.status,
        projectid:req.params.id
    }

    IssueModel.add(newIssue)
    res.redirect(`/issue/${req.params.id}`)
  }
}