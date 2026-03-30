import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TagModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
