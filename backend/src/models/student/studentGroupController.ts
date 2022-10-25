import { StudentCreateGroup } from './studentCreateGroup';
import { Response } from 'express';
import { Request } from 'express';



export class StudentGroupController{
  async handle(req:Request,res:Response){
    try {
      const {emailStudent} = req.body;
      const studentCreateGroup = new StudentCreateGroup();

     const result =  await studentCreateGroup.execute({emailStudent});
      return res.status(204).json(result)
    } catch (error) {
      return res.status(400).send({error:"deu pau"});
    }
  }
}