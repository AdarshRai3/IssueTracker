export default class ProjectModel {
  constructor (id, name ,desc, author,date){
    this.id = id
    this.name = name
    this.desc=desc
    this.author=author
    this.date=date
  }

 static get(){
    return projects;
  }
}


var projects =[
    new ProjectModel(
        1,
        "testname1",
        "testdesc1",
        "testauthor",
        "2023/1/1"
    ),
    new ProjectModel(
        2,
        "testname2",
        "testdesc2",
        "testauthor",
        "2023/2/2"
    )
]