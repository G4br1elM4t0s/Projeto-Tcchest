import { Request, Response } from 'express';
import { StudentLogin } from './studentLogin';
export class StudentLoginController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const studentLogin = new StudentLogin();

      const result = await studentLogin.execute({
        email, password
      });

      res.status(200).json(result);

    } catch (error) {
      return res.status(400).send({ error: "Error" + error })
    }
  }
}