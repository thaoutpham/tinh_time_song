import { Injectable } from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
playlist: Song[] = [
  {
    id: 'CX11yw6YL1w',
    name: 'Céline Dion'
  },
  {
  id: 'HBYirj2c_jw',
  name: 'Deadpool 2'
},
  {
    id: 'BjVHBGGm00k',
    name: 'Chốn Quê Thanh Bình'
  }
];
  constructor() { }
  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
