import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionModule } from './mission/mission.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MissionModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
