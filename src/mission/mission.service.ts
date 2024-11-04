import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MissionService {
  constructor(private prisma: PrismaService) { }
  create(createMissionDto: CreateMissionDto) {
    return this.prisma.missionGenerator.create({
      data: createMissionDto
    });
  }

  findAllAlive() {
    return this.prisma.missionGenerator.findMany({
      where: { status: 'pending' }
    });
  }

  findOne(id: number) {
    return this.prisma.missionGenerator.findUnique({
      where: { id }
    });
  }

  update(id: number, updateMissionDto: UpdateMissionDto) {
    return this.prisma.missionGenerator.update({
      where: {id},
      data: updateMissionDto
    });
  }

  remove(id: number) {
    return this.prisma.missionGenerator.delete({
      where: { id }
    });
  }
}
