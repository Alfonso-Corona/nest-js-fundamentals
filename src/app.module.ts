import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), TagModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
