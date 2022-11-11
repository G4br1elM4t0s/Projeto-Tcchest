import { GroupDTO } from './groupDTO';
import { Group, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GroupCreate{
  async execute({emailStudent}:GroupDTO):Promise<Group>{
      console.log("cheuei");
    const group = await prisma.group.create({
      data:{
        emailStudent
      }
    });
    console.log('id eh: '+group.id);
    return group;

  }
}