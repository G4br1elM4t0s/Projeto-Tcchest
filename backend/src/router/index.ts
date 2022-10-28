import { ProjectController } from './../models/project/projectController';
import { StudentShowEmailController } from './../models/student/studentShowEmailController';
import { StudentGroupInvitedController } from './../models/student/studentGroupInvitedController';

import { Request, Response, Router } from "express";
import { StudentController } from "../models/student/studentController";
import { StudentGroupController } from "../models/student/studentGroupController";



import multer from 'multer';
import {multerConfig} from '../config/multer'


const studentController = new StudentController();
const studentGroupController = new StudentGroupController();
const studentGroupInvitedController = new StudentGroupInvitedController();
const studentShowEmailController = new StudentShowEmailController();

const projectController = new ProjectController();

const routes = Router();

routes.get('/', (req:Request,res:Response)=>{
  res.send({ok:true});
});

routes.post('/students', studentController.handle);
routes.post('/group', studentGroupController.handle);
routes.post('/invited',studentGroupInvitedController.handle);
routes.post('/searchStudent',studentShowEmailController.handle);


routes.post('/teste', multer(multerConfig).single("file"),projectController.handle); 


// routes.post('/aaa', multer(multerConfig).single("file"),(req:Request,res:Response)=>{
//   console.log(req.file); 
//   const{originalname} = req.file;
// })


export {routes}