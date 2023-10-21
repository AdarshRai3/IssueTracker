import path from 'path'

export default class IssueController{
    getIssues(req,res){
     return res.sendFile(path.join(path.resolve(),'src','views','issue.ejs'));
    }
}