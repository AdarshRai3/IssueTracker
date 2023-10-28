const validateRequest = (req,res,next)=>
 {
    const{name,desc,author,date}=req.body;
    let errors=[];
    if(!name ||name.trim()==''){
       errors.push("Name is required")
    }
    if(!desc || desc.trim()==''){
       errors.push("Description is required")
    }
    if(!author || author.trim ==''){
       errors.push("Author name is required")
    }
    if (!date || date.trim==''){
       errors.push("Date is required")
    }
    if(errors.length > 0){
       return res.render('new-project',{
           errorMessage: errors[0],
       });
    }
 }
 export default validateRequest