export default class ProjectModel{
    constructor(id,name,desc,author,date){
       this.id = id;
       this.name = name;
       this.desc = desc;
       this.author = author;
       this.date = date;
    }
    static get(){
        return projects;
    }
    static add(projectObj){
        let newProject= new ProjectModel(
          projects.length+1,  
          projectObj.name,
          projectObj.desc,
          projectObj.author,
          projectObj.date
        )
        projects.push(newProject)

    }
}

var projects =[
    new ProjectModel(1230457,
        'Issue Tracker App',
        'This is the app to track the issues that we get while building the app we can track bugs and other errors with this and track the important parameter about that such as severity and file in which error is happening and helps us to manange our project better',
        'Adarsh Rai',
        '20/08/2023'
     )
];