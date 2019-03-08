import { Injectable } from '@angular/core';
import { Hike } from '../models/Hike';
import { IHikeService } from './IHikeService';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HikeService implements IHikeService {
  items: AngularFirestoreCollection<Hike>;

  getHikes(): Observable<Hike[]> {
    console.log('[HikeService] Fetch hikes');
    
    return this.items.valueChanges();
  }

  getHike(id: string): Observable<Hike> {
    console.log('[HikeService] Fetch hike: ' + id);
    
    return this.items.doc<Hike>(id).valueChanges();
  }

  saveHike(hike: Hike): Observable<string> {
    console.log('[HikeService] Save hike: ' + hike);
    
    throw new Error("Method not implemented.");
  }

  list(): Observable<Hike[]> {
    throw new Error("Method not implemented.");
  }

  constructor(db: AngularFirestore) { 
    this.items = db.collection('hikes');  
  }
}
