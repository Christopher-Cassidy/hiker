import { TestBed } from '@angular/core/testing';
import { HikeService } from './hike.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';

describe('HikeService', () => {
  let service: HikeService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    
    //service = new HikeService(new AngularFirestore(null, config, true, settings));
  });

});
