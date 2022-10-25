import { PrismaClient } from '@prisma/client';
import { StudentGroupInvitedDTO } from "./studentGroupInvitedDTO";

const prisma = new PrismaClient();

export class StudentGroupInvited{
  async execute({emailStudent,invitedEmail}:StudentGroupInvitedDTO): Promise<any>{
    const studentEmailAlreadyExists = await prisma.student.findUnique({
      where:{
        email:emailStudent
      },
      select:{
        groupId:true
      }
    });
    console.log(studentEmailAlreadyExists);


    if(!studentEmailAlreadyExists){
      throw new Error('student no exists');
    }

    const invitedAlreayExists = await prisma.student.findUnique({
      where:{
        email:invitedEmail
      },
      select:{
        id:true,
        groupId:true
      }
    });
    console.log(invitedAlreayExists);

    if(!invitedAlreayExists){
      throw new Error('User search student not found');
    }

    if(invitedAlreayExists.groupId != null){
      throw new Error('User already invited or has group ');
    }

    const studentInvitedGroup = await prisma.student.update({
      where:{
        id: invitedAlreayExists.id
      },
      data:{
        groupId: studentEmailAlreadyExists.groupId
      }
    });

    return studentInvitedGroup;

  }
}