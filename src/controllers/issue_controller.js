import IssueModel from '../models/issue_model.js'

export default class IssueController{
    getIssues(req,res){
     let issues = IssueModel.get();
     res.render("issue",{issues:issues}) 
    }
}