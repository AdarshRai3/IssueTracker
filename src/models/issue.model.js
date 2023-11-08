
export default class IssueModel{
    constructor (issueid, name ,desc,severity, reporter,assignee,date,status,projectid){
       
        this.issueid = issueid;
        this.name = name;
        this.desc=desc;
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
          issueObj.desc,
          issueObj.severity, 
          issueObj.reporter, 
          issueObj.assignee,
          issueObj.date,
          issueObj.status,
          issueObj.projectid
      );   
       issues.push(newIssue)
     }  
     static getByIssueId(issueid) {
        return issues.find((i) => i.issueid == issueid);
     }
       
       // function to update the data and put back in the list
       static updateIssue(issueObj) 
       {
         const index = issues.findIndex(
          (i) => i.issueid == issueObj.issueid
         );
         issues[index] = issueObj;
         console.log(issueObj);
         console.log(index);
         console.log("the current issue has been updated")
       }
       // function to delete the project
       static deleteIssue(issueid)
       {
          const index = issues.findIndex(
          (i) => i.issueid == issueid
         );
         issues.splice(index,1);
       }
}

var issues =[ 
  new IssueModel(
    1,
    "Incorrect Inventory Count",
    "The system is not updating the inventory count correctly after a sale. This happens intermittently and seems to occur more frequently when multiple sales are processed simultaneously",
    "High",
    "John Doe",
    "Inventory Management Team",
    "2023-02-01",
    "Open",
    1
)

]