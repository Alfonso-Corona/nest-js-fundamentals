import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  private readonly songs: CreateSongDto[] = [];

  create(song: CreateSongDto) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    //throw new Error('Error in DB while fertching data');
    return this.songs;
  }
}
