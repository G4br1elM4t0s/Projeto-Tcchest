import { StudentShowEmailController } from './../models/student/studentShowEmailController';
import { StudentGroupInvitedController } from './../models/student/studentGroupInvitedController';

import { Request, Response, Router } from "express";
import { StudentController } from "../models/student/studentController";
import { StudentGroupController } from "../models/student/studentGroupController";


const studentController = new StudentController();
const studentGroupController = new StudentGroupController();
const studentGroupInvitedController = new StudentGroupInvitedController();
const studentShowEmailController = new StudentShowEmailController();

const routes = Router();

routes.get('/', (req:Request,res:Response)=>{
  res.send({ok:true});
});

routes.post('/students', studentController.handle);
routes.post('/group', studentGroupController.handle);
routes.post('/invited',studentGroupInvitedController.handle);
routes.post('/searchStudent',studentShowEmailController.handle);


export {routes}