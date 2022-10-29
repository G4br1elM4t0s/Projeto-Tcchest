import { Student, PrismaClient } from '@prisma/client';
import { StudentLoginDTO } from './studentLoginDTO';

const prisma = new PrismaClient();

export class StudentLogin{
  async execute({email,password}:StudentLoginDTO):Promise<Student>{
    const studentAlredyExists = await prisma.student.findUnique({
      where:{
        email
      }
    });
    if(!studentAlredyExists){
      throw new Error("estudante não existe ou email incorreto");
    }

    if(studentAlredyExists.password !== password){
      throw new Error("senha incorreta");
    }


    return studentAlredyExists
  } 
}