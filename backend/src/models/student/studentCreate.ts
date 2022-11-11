import { PrismaClient, Student } from '@prisma/client';

import { StudentDTO } from "./studentDTO";

const prisma = new PrismaClient

export class StudentCreate{
  async execute({name,email,password}:StudentDTO): Promise<Student>{
    const studentAlreadyExists = await prisma.student.findUnique({
      where:{
        email
      }
    });

    if(studentAlreadyExists){
      throw new Error("Student already exists, registration is falied");
    }

    const student = await prisma.student.create({
      data:{
        email,
        name,
        password
      }
    });
    return student;
  }
}