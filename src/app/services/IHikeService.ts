import { Hike } from '../models/Hike';
import { Observable } from 'rxjs';
import { HikeSection } from '../models/HikeSection';

export interface IHikeService {
  getHikes(): Observable<Hike[]>;
  getHike(id: string): Observable<Hike>;  
  saveHike(hike: Hike):Promise<Hike>; 
  getHikeSections(id: string): Observable<HikeSection[]>;  
  getHikeSection(hikeId: string, sectionId: string): Observable<HikeSection>;
  saveHikeSection(hikeId: string, hikeSection: HikeSection):Promise<HikeSection>; 
}
