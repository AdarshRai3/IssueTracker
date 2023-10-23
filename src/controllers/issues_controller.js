import IssuesModel from '../models/issues_model.js';

class IssuesController{
    getIssues(req,res,next){
     let issues = IssuesModel.get();
     res.render('issues',{issues: issues});
    }


    getAddIssues(req,res,next){
        res.render('new_issues',{
            errorMessage: null,
        });
    }

    postNewIssue(req,res,next){
        
        const { name,desc,reporter,date} = req.body;
        let errors = [];
        if (!name || name.trim() == '') {
            errors.push('Name is required');
        }
        if (!desc || desc.trim() == '') {
            errors.push('Description is required');
        }
        if (!reporter || reporter.trim() == '') {
            errors.push('Author is required');
        }
        if (errors.length > 0) {
            return res.render('new_project', {
              errorMessage: errors[0],
            });
        }
       

        IssuesModel.add(req.body)
        let Issues = ProjectIssues.get();
        return res.render('issues',{issues})
    }
}
export default IssuesController;