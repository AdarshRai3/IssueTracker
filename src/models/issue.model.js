
export default class IssueModel{
    constructor (issueid, name ,severity, reporter,assignee,date,status,projectid){
       
        this.issueid = issueid;
        this.name = name;
        this.severity = severity;
        this.reporter = reporter;
        this.assignee = assignee;
        this.date = date;
        this.status = status;
        this.projectid = projectid;
    }
    static get(){
        return issues;
      }
    static add(issueObj){
        let newIssue = new IssueModel(
          issues.length+1, 
          issueObj.name, 
          issueObj.severity, 
          issueObj.reporter, 
          issueObj.assignee,
          issueObj.date,
          issueObj.status,
          issueObj.projectid
      );   
       issues.push(newIssue)
     }  
}
var issues =[ 
    new IssueModel(
        1,
        "form is showing wrong error",
        "Medium",
        "Rugved Hawale",
        "Adarsh Rai",
        "2020-10-20",
        "Currently working",
        1
    ),
   
]