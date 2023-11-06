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
    "Inventory Management System",
    "A system to manage inventory for a retail store, including features for tracking stock levels and sales.",
    "John Doe",
    "2023-01-01"
),
new ProjectModel(
    2,
    "Online Learning Platform",
    "A platform that provides online learning resources and courses for various subjects.",
    "Jane Smith",
    "2023-02-02"
),
new ProjectModel(
    3,
    "Weather Forecasting App",
    "An application that provides accurate weather forecasts for different locations worldwide.",
    "Alice Johnson",
    "2023-03-03"
),
new ProjectModel(
    4,
    "Fitness Tracker",
    "An app that helps users track their fitness activities and health data.",
    "Bob Williams",
    "2023-04-04"
)

]