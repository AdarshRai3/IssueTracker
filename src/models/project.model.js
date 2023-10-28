export default class ProjectModel {
  constructor (id, name ,desc, author,date){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.author=author;
    this.date=date;
  }

// function to get all the existing project in database
 static get(){
    return projects;
  }
 static add(projectObj){
    let newProject = new ProjectModel(
      projects.length+1, 
      projectObj.name, 
      projectObj.desc, 
      projectObj.author, 
      projectObj.date
  );   
  projects.push(newProject)
}
}


var projects =[
    new ProjectModel(
        1,
        "testname1",
        "testdesc1",
        "testauthor",
        "2023-2-2"
    ),
    new ProjectModel(
        2,
        "testname2",
        "testdesc2",
        "testauthor",
        "2023-2-2"
    )
]