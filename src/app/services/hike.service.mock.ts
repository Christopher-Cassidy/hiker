import { Injectable } from '@angular/core';
import { Hike } from '../models/Hike';
import { HIKES } from '../models/HikesMock';
import { IHikeService } from './IHikeService';
import { Observable } from 'rxjs';
import *as _ from 'lodash';
import { HikeSection } from '../models/HikeSection';

@Injectable({
  providedIn: 'root'
})
export class HikeServiceMock implements IHikeService {
  
  public saveHikeSection(hikeId: string, hikeSection: HikeSection): Promise<HikeSection> {
    throw new Error("Method not implemented.");
  }
  
  public getHikeSection(hikeId: string, sectionId: string): Observable<HikeSection> {
    throw new Error("Method not implemented.");
  }

  public getHikeSections(id: string): Observable<HikeSection[]> {
    throw new Error("Method not implemented.");
  }
  
  public getHikes(): Observable<Hike[]> {
    return Observable.create(obs => obs.next(HIKES));
  }

  public getHike(id: string): Observable<Hike> {
    return Observable.create(obs => obs.next(_.find(HIKES, { "id": id })));
  }

  public saveHike(hike: Hike): Promise<Hike> {
    var idx = _.findIndex(HIKES, { "id": hike.id });

    if (idx > -1) {
      HIKES.splice(idx, 1, hike);
    }
    else {
      hike.id = this.getUUID();
      HIKES.push(hike);
    }

    return new Promise(() => hike);
  }

  constructor() { }

  private getUUID(): string {
    // Otherwise, just use Math.random
    // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
