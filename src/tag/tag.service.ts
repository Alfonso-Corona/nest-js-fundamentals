import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  getAllTags() {
    return ['ai', 'typescript', 'javascript'];
  }
}
