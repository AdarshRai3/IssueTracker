 function deleteProject(id ){
    const result = confirm("Are you sure you want to remove this project");
    if(result)
    {
     //fetch the delete-project from index.js 
        fetch("/delete-project/"+id,{
            method: "POST"
        }).then(res=>{
           if(res.ok)  {
            location.reload();
           }
        })
    }
 }