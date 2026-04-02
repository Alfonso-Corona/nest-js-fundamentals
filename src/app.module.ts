import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal: true }),
    TagModule,
    UserModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
