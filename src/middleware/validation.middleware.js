import {body, validationResult} from "express-validator";

const validateRequest = async (req,res,next)=>
 {
   //  const{name,desc,author,date}=req.body;
   //  let errors=[];
   //  if(!name ||name.trim()==''){
   //     errors.push("Name is required")
   //  }
   //  if(!desc || desc.trim()==''){
   //     errors.push("Description is required")
   //  }
   //  if(!author || author.trim ==''){
   //     errors.push("Author name is required")
   //  }
   //  if (!date || date.trim==''){
   //     errors.push("Date is required")
   //  }
   // now we are using express validator library to validate 
   // step 1 : set up rules of validator
   

    const rules = [
      body('name').notEmpty(). withMessage("Title is required"),
      body('desc').notEmpty(). withMessage("Description is required"),
      body('author').notEmpty(). withMessage("Author is Requird"),
      body('date').isDate(). withMessage("Date is Required")
    ] 
   
    // step 2 : run those rules 
   await Promise.all(rules.map((rule)=>rule.run(req)))
    
    // step 3 : check if there are any errors after running rules
   var validationErrors = validationResult(req)
   

    if(!validationErrors.isEmpty()){
       return res.render('new-project',{
           errorMessage: validationErrors.array()[0].msg,
       });
    }
 }
 export default validateRequest