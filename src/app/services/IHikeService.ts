import { Hike } from '../models/Hike';
import { Observable } from 'rxjs';

export interface IHikeService {
  getHikes(): Observable<Hike[]>;
  getHike(id: string): Observable<Hike>;
  saveHike(hike: Hike): Observable<string>; 
  list(): Observable<Hike[]>;
}
