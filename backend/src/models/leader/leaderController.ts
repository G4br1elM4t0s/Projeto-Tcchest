import { LeaderCreate } from './leaderCreate';
import { Request, Response } from 'express';


export class LeaderController{
  async handle(req:Request,res:Response){
    try {
      const {email, name,ocupation,password} = req.body;
      const leaderCreate = new LeaderCreate();

      const result = await leaderCreate.execute({
        email,
        name,
        password,
        ocupation
      });

      res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({error: "Erro ao registrar um Mentor"});
    }

  }
}