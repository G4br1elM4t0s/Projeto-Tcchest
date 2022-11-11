import { Leader, PrismaClient } from '@prisma/client';
import { LeaderDTO } from './leaderDTO';

const prisma = new PrismaClient();

export class LeaderCreate{
  async execute({name,email,password,ocupation}:LeaderDTO): Promise<Leader>{
    const leaderAlreadyExists = await prisma.leader.findUnique({
      where:{
        email
      }
    });

    if(leaderAlreadyExists){
      throw new Error('Leader already exists');
    }

    const leader = await prisma.leader.create({
      data:{
        email,
        name,
        password,
        ocupation
      }
    });

    return leader;
  }
}