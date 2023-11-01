import {body, validationResult} from "express-validator";

const validateRequest = async (req,res,next)=>
 {

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
    next();
 }
 export default validateRequest