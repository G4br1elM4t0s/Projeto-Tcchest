import { StudentCreate } from './studentCreate';
import { Request, Response } from 'express';


export class StudentController{
  async handle(req:Request,res:Response){
    try {
      const {name, email, password} = req.body;
      const studentCreated = new StudentCreate();
      const result = await studentCreated.execute({email, name, password});


      console.log(result);
      return res.status(201).json(result);
      
    } catch (error) {
      console.log(error);
      return res.status(400).json({error: "Registration falied!!!! user alredy exists or falid is system"});
    }
  }
}