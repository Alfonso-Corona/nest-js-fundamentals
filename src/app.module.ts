import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal: true }),
    TagModule,
    UserModule,
    ArticleModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
