import { GroupCreate } from './../group/groupCreate';

import { PrismaClient } from '@prisma/client';
import { StudentGroupDTO } from "./studentGroupDTO";

const prisma =  new PrismaClient();

export class StudentCreateGroup{
  async execute({emailStudent}:StudentGroupDTO):Promise<any>{
    const group = new GroupCreate();
    
    //pessoa que eu quero
    const studentAlreadyExists = await prisma.student.findUnique({
      where:{
        email:emailStudent
      }
    });

    if(!studentAlreadyExists){
      return new Error("user not found");  
    }

    const student = await prisma.student.findUnique({
      where:{
        email:emailStudent
      },
      select:{
        id:true,
        name:true,
        groupId:true,
        email:true
      }
    });
    console.log(student);

    if(student?.groupId !== null){
      return new Error("group already exists");
    }

    const groupStudent = await group.execute({emailStudent});

    const studentUpdate = await prisma.student.update({
      where: {
        id: student?.id
      },
      data:{
        groupId: groupStudent.id,
      }
    }); 
    console.log(studentUpdate);
    return studentUpdate;

  }
}