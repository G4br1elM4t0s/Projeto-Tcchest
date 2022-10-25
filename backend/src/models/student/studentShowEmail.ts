import { PrismaClient, Student } from '@prisma/client';
import { StudentShowDTO } from './studentShowDTO';

const prisma = new PrismaClient();

export class StudentShowEmail {
  async execute({ email }: StudentShowDTO): Promise<Student> {
    const studentEmailAlreadyExists = await prisma.student.findUnique({
      where: {
        email
      },
      include: {
        Group: {
          select:{
            members:true
          }
        }
      }
    });

    if (!studentEmailAlreadyExists) {
      throw new Error("User not found");
    }


    return studentEmailAlreadyExists

  }
}