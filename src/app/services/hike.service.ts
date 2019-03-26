import { Injectable } from '@angular/core';
import { Hike } from '../models/Hike';
import { IHikeService } from './IHikeService';
import { Observable, of, from, pipe } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentData, Action, DocumentSnapshotDoesNotExist, DocumentSnapshotExists } from '@angular/fire/firestore';
import { map, tap, take } from 'rxjs/operators';
import { GalleryImage } from '../models/GalleryImage';
import { DocumentRef } from '@agm/core/utils/browser-globals';
import { forEach } from '@angular/router/src/utils/collection';
import { GalleryEditorComponent } from '../admin/gallery-editor/gallery-editor.component';
import { HikeSection } from '../models/HikeSection';
import { Entity } from '../models/Entity';

@Injectable({
  providedIn: 'root'
})
export class HikeService implements IHikeService {

  items: AngularFirestoreCollection<Hike>;

  getHikes(): Observable<Hike[]> {
    return this.items
      .valueChanges()
      .pipe(
        tap(val => console.log('[HikeService] Fetch hikes', val)
        )
      );
  }

  getHike(id: string): Observable<Hike> {
    console.log('[HikeService] Fetch hike', id);

    if (id === undefined) {
      return of(new Hike());
    }

    return this.items.doc<Hike>(id).valueChanges().pipe(
      map(hike => {
        hike.id = id;
        return hike;
      }),
      tap(hike => console.log('[HikeService] Fetch result', hike))
    );
  }

  saveHike(hike: Hike): Promise<Hike> {
    console.log('[HikeService] Save hike', hike);

    var prom = (hike.id === undefined) ?
      // Add / Update hike
      this.db.collection('hikes')
        .add(hike)
        .then(doc => { hike.id = doc.id; }) :

      this.db.collection('hikes')
        .doc(hike.id)
        .update(hike);

    // Clear / Add Hike Gallery
    return new Promise<Hike>(() => {
      prom.then(() => {
        // this.saveGallery(hike); 
        return hike;
      })
    });
  }

  saveHikeSection(hikeId: string, hikeSection: HikeSection): Promise<HikeSection> {
    return this.save<HikeSection>(`hikes/${hikeId}/sections`, hikeSection);
  }

  getHikeSections(id: string): Observable<HikeSection[]> {
    console.log('[HikeService] Fetch hike sections', id);

    return this.db.collection<HikeSection>(`hikes/${id}/sections`)
      .snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          var section = a.payload.doc.data() as HikeSection;
          section.id = a.payload.doc.id;
          return section;
        })
      }));
  }

  getHikeSection(hikeId: string, sectionId: string): Observable<HikeSection> {
    console.log('[HikeService] Fetch hike section', { hikeId, sectionId });

    return this.db
      .doc<HikeSection>(`hikes/${hikeId}/sections/${sectionId}`)
      .valueChanges().pipe(
        map(section => {
          section = section || new HikeSection();
          section.id = sectionId;
          return section;
        }));
  }


  private loadGallery(hike: Hike): void {
    console.log('[HikeService] load gallery for hike', hike.id);
    hike.gallery = hike.gallery || [];

    this.db.firestore
      .collection(`hikes/${hike.id}/gallery`)
      .onSnapshot(snap => {
        snap.forEach(doc => hike.gallery.push(doc.data() as GalleryImage));

        console.log('[HikeService] gallery loaded', hike.gallery);
      });
  }

  private saveGallery(hike: Hike): void {
    console.log('[] save gallery', hike.gallery);
    var gallery = hike.gallery;

    var batch = this.db.firestore.batch();

    var prom =
      this.db
        .firestore
        .collection(`hikes/{hike.id}/gallery`)
        .get()
        .then(qs => {
          // Batch-delete existing images
          qs.forEach(img => batch.delete(img.ref));

          batch.commit().then(() => {
            console.log('[HikeService] existing gallery cleared');

            gallery.forEach((img, idx) =>
              this.db
                .collection(`hikes/${hike.id}/gallery`)
                .ref
                .add(img)
                .then(doc => console.log('[HikeService] added gallery image', doc.id)));
          })
        });
  }

  constructor(private db: AngularFirestore) {
    this.items = db.collection('hikes');
  }

  private save<T extends Entity>(path: string, data: any): Promise<T> {
    const doc = this.db.doc(`${path}/${data.id}`)
      .snapshotChanges()
      .pipe(take(1))
      .toPromise();

    return doc.then((snap: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>>) => {
      return snap.payload.exists ? this.update<T>(path, data) : this.create<T>(path, data);
    });
  }

  private update<T extends Entity>(path: string, data: T): Promise<T> {
    console.log('[HikeService] update entity', { path: path, entity: data });

    return this.db.doc(`${path}/${data.id}`).update(data).then(() => data);
  }
  private create<T extends Entity>(path: string, data: T): Promise<T> {
    console.log('[HikeService] create entity', { path: path, entity: data });

    return this.db.collection(path)
      .add(JSON.parse(JSON.stringify(data)))
      .then(doc => { 
        data.id = doc.id; 
        return data; 
      });
  }
}
