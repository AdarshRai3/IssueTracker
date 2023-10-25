export default class ProjectModel{
    constructor(id,name,desc,author,date){
       this.id = id;
       this.name = name;
       this.desc = desc;
       this.author = author;
       this.date = date;
    }
    static getAll(){
        return projects;
    }
    
    static add(projectsObj){
        let newProject= new ProjectModel(
          projects.length+1,  
          projectsObj.name,
          projectsObj.desc,
          projectsObj.author,
          projectsObj.date
        )
        projects.push(newProject)

    }

    static update(projectsObj) { 
        const index = projects.findIndex(
            (p) => p.id == projectsObj.id
          );
          projects[index] = projectsObj;
    }

    static getById(id){
       return projects.find((p) => p.id == id);
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