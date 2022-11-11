import { ProjectCreate } from './projectCreate';
import { Request, Response } from "express";




export class ProjectController{
  async handle(req:Request,res:Response){
    try {
      const {title,description,group_Id} = req.body;
      const name = req.file?.originalname;
      const size = req.file?.size;
      const key =  req.file?.filename;
      const url = " ";

      const projectCreate = new ProjectCreate();

      const result = await projectCreate.execute({title,description,size,key,url,name,group_Id})

      return res.status(201).json(result)
    } catch (error) {
      console.log(error);
      return res.status(400).json({error:"Error ao criar o projeto"})
    }
  }
}