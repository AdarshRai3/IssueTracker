export default class ProjectModel{
    constructor(_id,_name,_desc,_author,_date){
       this._id
       this.name
       this._desc
       this._author
       this._date
    }
    static get(){
        return projects;
    }
    static add(projectObj){
        let newProject= new ProjectModel(
          projectObj.name,
          projectObj.desc,
          projectObj.author,
          projectObj.date
        )
        projects.push(newProject)

    }
}

var projects =[
    new ProjectModel(

    )
]