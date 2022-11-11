import { StudentShowEmail } from './studentShowEmail';
import { Request, Response } from "express";

export class StudentShowEmailController{
  async handle(req:Request,res:Response){
    try {
      const {email} = req.body;
      const studentShowEmail = new StudentShowEmail();

      const result = await studentShowEmail.execute({email});

      res.status(200).json(result);

    } catch (error) {
      return res.status(404).send({error: "Student not found"});
    }
  }
}