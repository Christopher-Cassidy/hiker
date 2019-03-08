import { Injectable } from '@angular/core';
import { Hike, HIKES } from '../models/Hike';
import { IHikeService } from './IHikeService';
import { Observable } from 'rxjs';
import *as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HikeServiceMock implements IHikeService {
  public getHikes(): Observable<Hike[]> {
    return Observable.create(obs => obs.next(HIKES));
  }

  public getHike(id: string): Observable<Hike> {
    return Observable.create(obs => obs.next(_.find(HIKES, { "id": id })));
  }

  public saveHike(hike: Hike): Observable<string> {
    var idx = _.findIndex(HIKES, { "id": hike.id });

    if (idx > -1) {
      HIKES.splice(idx, 1, hike);
    }
    else {
      hike.id = this.getUUID();
      HIKES.push(hike);
    }

    return Observable.create(obs => obs.next(hike.id));
  }

  public list(): Observable<Hike[]> {
    return Observable.create(obs => obs.next(HIKES));
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
