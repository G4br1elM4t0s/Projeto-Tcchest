import { PrismaClient, Project } from '@prisma/client';
import { ProjectDTO } from './projectDTO';

const prisma = new PrismaClient()

export class ProjectCreate {
  async execute({ title, description, key, name, size, url, group_Id }: ProjectDTO): Promise<Project> {
    const alreadTitleProject = await prisma.project.findUnique({
      where: {
        title
      }
    });

    if (alreadTitleProject) {
      throw new Error('O titulo do projeto ja existe');
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        key,
        name,
        size,
        url,
        group_Id
      }
    });

    return project

  }
}