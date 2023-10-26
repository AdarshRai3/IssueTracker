import express from 'express';

const app = express();

app.get('/',(req,res)=>
{
   return res.send("Welcome to Issue Tracker App")
});
app.listen(9000);