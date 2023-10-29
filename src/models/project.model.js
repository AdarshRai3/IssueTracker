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
 
 // function to add project in the existing database
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
 
 // function to fetch the product by its id and change data 
 static getById(id) {
  return projects.find((p) => p.id == id);
 }
 
 // function to update the data and put back in the list
 static update(projectObj) {
  const index = projects.findIndex(
    (p) => p.id == projectObj.id
  );
  projects[index] = projectObj;
 }

 // function to delete the project
 static delete(id){
  const index = projects.findIndex(
    (p) => p.id == id
  );
  projects.splice(index,1);
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