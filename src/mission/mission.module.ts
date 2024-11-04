import { Module } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MissionController],
  providers: [MissionService],
  imports: [PrismaModule]
})
export class MissionModule {}
