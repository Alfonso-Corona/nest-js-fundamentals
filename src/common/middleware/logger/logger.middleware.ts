import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request ...', new Date().toDateString());
    next();
  }
}
