import { StudentGroupInvited } from './studentGroupInvited';
import { Response , Request } from 'express';

export class StudentGroupInvitedController{
  async handle(req:Request,res:Response){
    try {
      const {emailStudent,invitedEmail} = req.body;

      const studentGrouInvited = new StudentGroupInvited();

      const result = await studentGrouInvited.execute({emailStudent,invitedEmail});

      res.status(204).json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).send({error: "error de criação de um grupo. Tente novamente mais tarde"});
    }
  }
}