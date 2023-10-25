import { 
  body, 
  validationResult,
} from 'express-validator';

const validateRequest=async (
  req,
  res,
  next
  ) => {
//  validate data
// 1.Step up rules for validation
 console.log(req.body);
  const rules =[
        body('name')
          .notEmpty()
          .withMessage("Name is required"), 
        body('desc')
          .notEmpty()
          .withMessage("Description is required"),
        body('author')
          .notEmpty()
          .withMessage("Author is required"),
        body('date')
          .isDate()
          .withMessage("Date is required")
  ];
//run all those rules 
    await Promise.all(
      rules.map((rule)=>rule.run(req))
    );
//check the errors after running the rules
    var validationErrors =validationResult(req);
// if there are errors return the errors
 if (!validationErrors.isEmpty()) {
    return res.render('new_project', {
      errorMessage: validationErrors.array()[0].msg,
    });
 }  
 next();
}

export default validateRequest;